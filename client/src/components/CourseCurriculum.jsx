import { useEffect, useRef, useState } from "react";

function CurriculumIntroCard({ number, title, desc }) {
  return (
    <div className="curriculum-intro-card">
      <span className="curriculum-intro-number">{number}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="15" height="15" rx="4" fill="var(--blue-soft)" stroke="var(--blue-pale)" />
      <path
        d="M4.5 8.2 6.8 10.5 11.5 5.5"
        stroke="var(--blue)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CurriculumSidebar({ modules, activeIndex, onSelect, sidebarRef, style }) {
  return (
    <aside className="curriculum-sidebar" ref={sidebarRef} style={style}>
      <span className="curriculum-sidebar-label">Modules</span>
      <ul className="curriculum-sidebar-list">
        {modules.map((module, i) => (
          <li key={module.title}>
            <button
              type="button"
              className={`curriculum-sidebar-item ${activeIndex === i ? "active" : ""}`}
              onClick={() => onSelect(i)}
            >
              <span className="curriculum-sidebar-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="curriculum-sidebar-title">{module.title}</span>
        
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function CurriculumCard({ module, index, cardRef }) {
  const number = String(index + 1).padStart(2, "0");
  const topicsCount = module.topicsCount ?? module.points?.length ?? 0;

  return (
    <div className="curriculum-card" id={`curriculum-module-${index}`} ref={cardRef}>
      <span className="curriculum-card-bignum" aria-hidden="true">
        {number}
      </span>

      <div className="curriculum-card-head">
        <span className="curriculum-card-number">{number}</span>
        <h3>{module.title}</h3>
        <span className="curriculum-card-tag">{topicsCount} topics</span>
      </div>

      {module.points?.length > 0 && (
        <ul className="curriculum-card-points">
          {module.points.map((point, i) => (
            <li key={i}>
              <CheckIcon />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Distance from the top of the viewport (below the fixed navbar) where
// the sidebar pins and where a card counts as "current".
const STICKY_TOP = 110;
// Below this viewport width the sidebar just sits above the cards in
// normal flow (see curriculum-media.css) — skip all the fixed-position
// math there.
const STICKY_BREAKPOINT = 900;
// How long to ignore scroll-driven active-card updates after a sidebar
// click, so the smooth-scroll animation doesn't fight with the state.
const CLICK_SCROLL_LOCK_MS = 700;

export default function CourseCurriculum({ eyebrow, title, subtitle, intro, modules }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sidebarStyle, setSidebarStyle] = useState({ position: "static" });
  const [wrapHeight, setWrapHeight] = useState(0);

  const cardRefs = useRef([]);
  const wrapRef = useRef(null); // in-flow placeholder — defines the column's position/width
  const sidebarRef = useRef(null); // the visually-positioned sidebar (fixed/absolute/static)
  const cardsColRef = useRef(null); // bottom bound of the scrollable cards column
  const isClickScrolling = useRef(false);
  const unlockTimer = useRef(null);

  const hasIntro = intro?.length > 0;
  const hasModules = modules?.length > 0;

  useEffect(() => {
    if (!hasModules) return;

    const update = () => {
      // ---- active card tracking ----
      if (!isClickScrolling.current) {
        let current = 0;
        for (let i = 0; i < cardRefs.current.length; i++) {
          const el = cardRefs.current[i];
          if (!el) continue;
          const top = el.getBoundingClientRect().top;
          if (top - STICKY_TOP <= 0) {
            current = i;
          } else {
            break;
          }
        }
        setActiveIndex(current);
      }

      // ---- manual sticky sidebar ----
      const wrap = wrapRef.current;
      const sidebar = sidebarRef.current;
      const cardsCol = cardsColRef.current;
      if (!wrap || !sidebar || !cardsCol) return;

      if (window.innerWidth <= STICKY_BREAKPOINT) {
        setSidebarStyle({ position: "static" });
        setWrapHeight(0);
        return;
      }

      const wrapRect = wrap.getBoundingClientRect();
      const cardsRect = cardsCol.getBoundingClientRect();
      const sidebarHeight = sidebar.offsetHeight;

      setWrapHeight(sidebarHeight);

      if (wrapRect.top > STICKY_TOP) {
        // Section hasn't reached the pin point yet — let it sit in flow.
        setSidebarStyle({ position: "static" });
      } else if (cardsRect.bottom - sidebarHeight < STICKY_TOP) {
        // Reached the bottom of the cards column — stop following the
        // viewport and pin to the bottom of the column instead, so it
        // doesn't overshoot past the last card.
        setSidebarStyle({
          position: "absolute",
          bottom: 0,
          left: 0,
          width: wrapRect.width,
        });
      } else {
        setSidebarStyle({
          position: "fixed",
          top: STICKY_TOP,
          left: wrapRect.left,
          width: wrapRect.width,
        });
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [hasModules, modules]);

  useEffect(() => {
    return () => {
      if (unlockTimer.current) clearTimeout(unlockTimer.current);
    };
  }, []);

  if (!hasModules) return null;

  const scrollToModule = (i) => {
    isClickScrolling.current = true;
    setActiveIndex(i);
    cardRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });

    if (unlockTimer.current) clearTimeout(unlockTimer.current);
    unlockTimer.current = window.setTimeout(() => {
      isClickScrolling.current = false;
    }, CLICK_SCROLL_LOCK_MS);
  };

  const wrapIsPinned = sidebarStyle.position !== "static";

  return (
    <section className="course-curriculum">
      <div className="container">
        <div className="section-head">
          {eyebrow && (
            <span className="eyebrow-pill">
              <span className="eyebrow-dot" aria-hidden="true" />
              {eyebrow}
            </span>
          )}
          <h2>{title}</h2>
          {subtitle && <p className="section-sub">{subtitle}</p>}
        </div>

        {hasIntro && (
          <div className="curriculum-intro-grid">
            {intro.map((item, i) => (
              <CurriculumIntroCard
                key={i}
                number={String(i + 1).padStart(2, "0")}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        )}

        <div className="curriculum-layout">
          <div
            className="curriculum-sidebar-wrap"
            ref={wrapRef}
            style={wrapIsPinned ? { height: wrapHeight } : undefined}
          >
            <CurriculumSidebar
              modules={modules}
              activeIndex={activeIndex}
              onSelect={scrollToModule}
              sidebarRef={sidebarRef}
              style={sidebarStyle}
            />
          </div>

          <div className="curriculum-cards" ref={cardsColRef}>
            {modules.map((module, i) => (
              <CurriculumCard
                key={module.title}
                module={module}
                index={i}
                cardRef={(el) => {
                  cardRefs.current[i] = el;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}