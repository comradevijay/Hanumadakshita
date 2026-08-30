import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


// Cubic Bézier point at parameter t.
function cubicPoint(p0, p1, p2, p3, t) {
  const mt = 1 - t;
  const a = mt * mt * mt;
  const b = 3 * mt * mt * t;
  const c = 3 * mt * t * t;
  const d = t * t * t;
  return [
    a * p0[0] + b * p1[0] + c * p2[0] + d * p3[0],
    a * p0[1] + b * p1[1] + c * p2[1] + d * p3[1],
  ];
}

function computeArcLengthOffsets(points, samplesPerSegment = 24) {
  if (points.length < 2) return points.map(() => 0);

  const cumulative = [0];
  let total = 0;

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] || points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];

    let prev = p1;
    let segLen = 0;
    for (let s = 1; s <= samplesPerSegment; s++) {
      const t = s / samplesPerSegment;
      const pt = cubicPoint(p1, c1, c2, p2, t);
      const dx = pt[0] - prev[0];
      const dy = pt[1] - prev[1];
      segLen += Math.sqrt(dx * dx + dy * dy);
      prev = pt;
    }
    total += segLen;
    cumulative.push(total);
  }

  return cumulative.map((c) => (total ? c / total : 0));
}

// Smooth curve through an ordered list of [x, y] points.
function smoothPath(points) {
  if (points.length === 0) return "";
  if (points.length === 1) return `M ${points[0][0]} ${points[0][1]}`;

  let d = `M ${points[0][0]} ${points[0][1]} `;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] || points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += `C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2[0]} ${p2[1]} `;
  }
  return d.trim();
}


function RoadmapDot({ point, t, progress }) {
  const opacity = useTransform(progress, [Math.max(t - 0.04, 0), t], [0, 1]);
  return (
    <motion.circle
      className="roadmap-snake-dot"
      cx={point[0]}
      cy={point[1]}
      r="6"
      fill="var(--green)"
      style={{ opacity }}
    />
  );
}

function RoadmapPhase({ phase, index, isReversed, phaseCount, progress, numberRef, tagRef }) {
  const start = index / phaseCount;
  const end = (index + 0.6) / phaseCount;
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [24, 0]);
  const isFirst = index === 0;
  const isLast = index === phaseCount - 1;

  return (
    <motion.div
      className={`roadmap-phase ${isReversed ? "roadmap-phase--reverse" : ""}`}
      style={{ opacity, y }}
    >
      <div className="roadmap-phase-visual">
        {phase.day && (isFirst || isLast) && (
          <span
            className={`roadmap-phase-tag ${isLast ? "roadmap-phase-tag--end" : ""}`}
            ref={tagRef}
          >
            {phase.day}
          </span>
        )}
        <span className="roadmap-phase-number" ref={numberRef} aria-hidden="true">
          {phase.phase}
        </span>
      </div>

      <div className="roadmap-phase-copy">
        <span className="eyebrow-pill">
          {phase.phase} <span className="roadmap-phase-eyebrow-sep">|</span> PHASE
        </span>
        <h3>{phase.title}</h3>
        <p>{phase.desc}</p>
      </div>
    </motion.div>
  );
}

export default function CourseRoadmap({ eyebrow, title, subtitle, phases }) {
  const listRef = useRef(null);
  const numberRefs = useRef([]);
  const tagRefs = useRef([]);
  const [geometry, setGeometry] = useState({ width: 0, height: 0, d: "", dots: [], dotTs: [] });

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.85", "end 0.55"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });
  const pathLength = useTransform(progress, [0, 1], [0, 1]);
  const dotOffset = useTransform(
    progress,
    (v) => `${Math.min(Math.max(v, 0), 1) * 100}%`
  );

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;

    function measure() {
      const listRect = list.getBoundingClientRect();

      // Thread the curve through: the first phase's start tag (if
      // present) → every phase's number, in order → the last phase's
      // end tag (if present). Points are taken from each pill/number's
      // own center, so the curve visibly passes through the middle of
      // each.
      const points = [];

      const startTag = tagRefs.current[0];
      if (startTag) {
        const t = startTag.getBoundingClientRect();
        points.push([
          t.left - listRect.left + t.width / 2,
          t.top - listRect.top + t.height / 2,
        ]);
      }

      numberRefs.current.forEach((numberEl) => {
        if (!numberEl) return;
        const n = numberEl.getBoundingClientRect();
        points.push([
          n.left - listRect.left + n.width / 2,
          n.top - listRect.top + n.height * 0.3,
        ]);
      });

      const lastIndex = phases.length - 1;
      const endTag = lastIndex > 0 ? tagRefs.current[lastIndex] : null;
      if (endTag) {
        const t = endTag.getBoundingClientRect();
        points.push([
          t.left - listRect.left + t.width / 2,
          t.top - listRect.top + t.height / 2,
        ]);
      }

      const d = smoothPath(points);
      const allTs = computeArcLengthOffsets(points);

      
      const dotPoints = startTag ? points.slice(1) : points;
      const dotTs = startTag ? allTs.slice(1) : allTs;

      setGeometry({
        width: listRect.width,
        height: listRect.height,
        d,
        dots: dotPoints,
        dotTs,
      });
    }

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(list);
    window.addEventListener("resize", measure);
    document.fonts?.ready?.then(measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [phases]);

  const offsetPathValue = useMemo(
    () => (geometry.d ? `path("${geometry.d}")` : "none"),
    [geometry.d]
  );

  return (
    <section className="course-roadmap">
      <div className="container">
        <div className="section-head left">
          {eyebrow && (
            <span className="eyebrow-pill">
              <span className="eyebrow-dot" aria-hidden="true" />
              {eyebrow}
            </span>
          )}
          <h2>{title}</h2>
          {subtitle && <p className="section-sub">{subtitle}</p>}
        </div>

        <div className="roadmap-list" ref={listRef}>
          <svg
            className="roadmap-snake"
            width={geometry.width}
            height={geometry.height}
            viewBox={`0 0 ${geometry.width} ${geometry.height}`}
            fill="none"
            aria-hidden="true"
          >
            <motion.path
              d={geometry.d}
              stroke="var(--green)"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ pathLength }}
            />
            <motion.circle
              r="6"
              fill="var(--green)"
              style={{ offsetPath: offsetPathValue, offsetDistance: dotOffset }}
            />
            {geometry.dots.map((point, i) => (
              <RoadmapDot
                key={i}
                point={point}
                t={geometry.dotTs[i] ?? 0}
                progress={progress}
              />
            ))}
          </svg>

          {phases.map((phase, i) => (
            <RoadmapPhase
              phase={phase}
              index={i}
              isReversed={i % 2 === 1}
              phaseCount={phases.length}
              progress={progress}
              numberRef={(el) => (numberRefs.current[i] = el)}
              tagRef={(el) => (tagRefs.current[i] = el)}
              key={phase.phase}
            />
          ))}
        </div>
      </div>
    </section>
  );
}