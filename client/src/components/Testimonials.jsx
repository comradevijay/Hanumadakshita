import { useState, useRef, useEffect } from "react";
import "../styles/styles.css";

const testimonials = [
  {
    name: "Lalitha Gayatri",
    role: "7 months ago",
    quote:
      "Very good experience; knowledgeable trainers, clear explanations from basics to advanced, practical sessions, and useful study material.",
    initials: "LG",
    color: "#eaf0ff",
  },
  {
    name: "Santhu Roooc",
    role: "7 months ago",
    quote:
      "Great MS Office learning experience with knowledgeable trainers and clear teaching from basic to advanced levels.",
    initials: "SR",
    color: "#ffeef5",
  },
  {
    name: "Kiran lucky Kiran lucky",
    role: "7 months ago",
    quote:
      "Completed Full Stack course with real projects including an e-commerce website and banking application; gained practical knowledge.",
    initials: "KL",
    color: "#e6f7ef",
  },
  {
    name: "Harsha Vardhan",
    role: "7 months ago",
    quote:
      "Completed Data Analyst course; appreciated real-time examples that improved logical skills.",
    initials: "HV",
    color: "#fff1e6",
  },
  {
    name: "Balaraju Gondi",
    role: "7 months ago",
    quote:
      "Completed Data Analyst course with real projects; received practical knowledge and proper guidance.",
    initials: "BG",
    color: "#eaf0ff",
  },
  {
    name: "Chennuru Vasavi",
    role: "7 months ago",
    quote:
      "Completed Data Analyst course with real projects and gained practical knowledge.",
    initials: "CV",
    color: "#ffeef5",
  },
  {
    name: "BS Parasmiee 4148",
    role: "7 months ago",
    quote:
      "Praised steady learning, strong academic foundation, critical thinking, and problem-solving skills.",
    initials: "BP",
    color: "#e6f7ef",
  },
  {
    name: "TAGARAM RAHUL",
    role: "7 months ago",
    quote:
      "Completed Full Stack course with real-time projects; recommended for beginners starting their coding journey.",
    initials: "TR",
    color: "#fff1e6",
  },
  {
    name: "Manu Royals 1234",
    role: "7 months ago",
    quote:
      "Recommended for building a solid practical IT foundation; praised comprehensive and industry-relevant curriculum.",
    initials: "MR",
    color: "#eaf0ff",
  },
  {
    name: "Vaishnavi Shankarapu",
    role: "7 months ago",
    quote:
      "Fantastic teaching; appreciated that concepts were explained in an understandable way despite a commerce background.",
    initials: "VS",
    color: "#ffeef5",
  },
  {
    name: "Reddy sai Tharun",
    role: "A year ago",
    quote:
      "Praised the quality of teaching and real-time examples; said learning was easy.",
    initials: "RT",
    color: "#e6f7ef",
  },
  {
    name: "Shwetha talari",
    role: "7 months ago",
    quote:
      "Good and well-maintained place with polite, helpful staff and organized service.",
    initials: "ST",
    color: "#fff1e6",
  },
  {
    name: "Naresh pawan",
    role: "Edited 6 months ago",
    quote: "Thoroughly impressed after completing a course at the institute.",
    initials: "NP",
    color: "#eaf0ff",
  },
  {
    name: "Anjum Sami khan",
    role: "4 months ago",
    quote: "Excellent institute for upcoming learners.",
    initials: "AK",
    color: "#ffeef5",
  },
  {
    name: "Niranjan U",
    role: "7 months ago",
    quote: "Colleges teaches subject but Institutions makes man perfect.",
    initials: "NU",
    color: "#e6f7ef",
  },
];


const SPEED = 45; // px per second, lower = slower
const DOT_COUNT = 5;

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [reduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const scrollRef = useRef(null);
  const cardRefs = useRef([]);
  const hoverRef = useRef(false);
  const pauseUntil = useRef(0);

  const total = testimonials.length;
  const cardsPerDot = Math.ceil(total / DOT_COUNT);

  // two copies so the loop is seamless (skipped for reduced motion)
  const loop = reduced ? testimonials : [...testimonials, ...testimonials];

  const pauseFor = (ms) => {
    pauseUntil.current = performance.now() + ms;
  };

  // ---- continuous auto-scroll to the left ----
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || reduced) return;

    let half = 0; // width of one full set of cards
    const measure = () => {
      const a = cardRefs.current[0];
      const b = cardRefs.current[total];
      if (a && b) half = b.offsetLeft - a.offsetLeft;
    };
    measure();
    window.addEventListener("resize", measure);

    let raf;
    let last = performance.now();
    let pos = el.scrollLeft;

    const tick = (now) => {
      const dt = Math.min(now - last, 50); // avoid a jump after tab switch
      last = now;

      if (hoverRef.current || now < pauseUntil.current) {
        pos = el.scrollLeft; // stay in sync with manual scrolling
      } else {
        pos += (SPEED * dt) / 1000;
        if (half && pos >= half) pos -= half; // jump back invisibly
        el.scrollLeft = pos;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, [reduced, total]);

  // ---- keep the active dot in sync with the scroll position ----
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let ticking = false;
    const update = () => {
      const r = el.getBoundingClientRect();
      const center = r.left + r.width / 2;
      let closest = 0;
      let best = Infinity;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const c = card.getBoundingClientRect();
        const d = Math.abs(c.left + c.width / 2 - center);
        if (d < best) {
          best = d;
          closest = i;
        }
      });
      // % total maps the cloned cards back onto the originals
      setActive(
        Math.min(DOT_COUNT - 1, Math.floor((closest % total) / cardsPerDot))
      );
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => el.removeEventListener("scroll", onScroll);
  }, [cardsPerDot, total]);

  // ---- clicking a dot: jump to the nearest copy of that card ----
  const scrollToDot = (dotIndex) => {
    const el = scrollRef.current;
    if (!el) return;

    const first = dotIndex * cardsPerDot;
    const pad = parseFloat(getComputedStyle(el).paddingLeft) || 0;
    const elLeft = el.getBoundingClientRect().left;

    const offsetOf = (i) => {
      const c = cardRefs.current[i];
      return c
        ? c.getBoundingClientRect().left - elLeft + el.scrollLeft - pad
        : null;
    };

    const candidates = [offsetOf(first), offsetOf(first + total)].filter(
      (v) => v !== null
    );
    const target = candidates.reduce((a, b) =>
      Math.abs(b - el.scrollLeft) < Math.abs(a - el.scrollLeft) ? b : a
    );

    pauseFor(3000); // let the smooth scroll finish, then resume drifting
    el.scrollTo({ left: target, behavior: "smooth" });
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow-pill">STUDENT FEEDBACK</span>
          <h2>
            What Our <span className="accent">Students</span> Say
          </h2>
          <span className="underline-accent" />
          <p className="section-sub">
            Notes from learners who've been through our batches.
          </p>
        </div>

        <div
          className="testimonials-scroll"
          ref={scrollRef}
          onMouseEnter={() => (hoverRef.current = true)}
          onMouseLeave={() => (hoverRef.current = false)}
          onTouchStart={() => pauseFor(4000)}
          onTouchEnd={() => pauseFor(2500)}
          onWheel={() => pauseFor(1500)}
        >
          <div className="testimonials-track">
            {loop.map((t, i) => (
              <div
                className="testimonial-card"
                key={`${t.name}-${i}`}
                ref={(el) => (cardRefs.current[i] = el)}
                aria-hidden={i >= total ? "true" : undefined}
              >
                <div className="testimonial-top">
                  <span className="testimonial-quote-mark" aria-hidden="true">
                    “
                  </span>
                </div>
                <p className="testimonial-text">{t.quote}</p>
                <div className="testimonial-divider" />
                <div className="testimonial-person">
                  <span
                    className="testimonial-avatar"
                    style={{ background: t.color }}
                  >
                    {t.initials}
                  </span>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials-dots">
          {Array.from({ length: DOT_COUNT }).map((_, i) => (
            <button
              key={i}
              className={i === active ? "active" : ""}
              aria-label={`View testimonials group ${i + 1}`}
              onClick={() => scrollToDot(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}