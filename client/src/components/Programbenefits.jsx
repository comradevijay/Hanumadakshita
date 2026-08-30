import { useEffect, useRef, useState } from "react";

/**
 * "Why choose this program?" — a 4-up grid of large faded ordinal
 * numbers (01, 02, 03...) each paired with an icon, title, and short
 * description. Cards fade/slide in on scroll via IntersectionObserver
 * rather than a scroll library, since it's a one-time reveal, not a
 * scrubbed animation.
 *
 * Usage:
 *   <ProgramBenefits
 *     eyebrow="Program Benefits"
 *     title="Why choose this program?"
 *     items={[
 *       { icon: <CheckIcon />, title: "Job Guarantee", desc: "100% job assistance until you get placed." },
 *       ...
 *     ]}
 *   />
 */
export default function ProgramBenefits({ eyebrow, title, items }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="program-benefits" ref={sectionRef}>
      <div className="container">
        <div className="section-head">
          {eyebrow && (
            <span className="eyebrow-pill">
              <span className="eyebrow-dot" aria-hidden="true" />
              {eyebrow}
            </span>
          )}
          <h2>{title}</h2>
        </div>

        <div className="program-benefits-grid">
          {items.map((item, i) => (
            <div
              className={`benefit-card ${visible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${i * 90}ms` }}
              key={item.title}
            >
              {i > 0 && <span className="benefit-divider" aria-hidden="true" />}
              <span className="benefit-number" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="benefit-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}