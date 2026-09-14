import { useEffect, useRef, useState } from "react";

export default function ProgramBenefits({ eyebrow, title, items, compact = false }) {
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
    <section
      className={`program-benefits${compact ? " program-benefits--compact" : ""}`}
      ref={sectionRef}
      style={compact ? { paddingTop: 32, paddingBottom: 0 } : undefined}
    >
      <div className="container">
        {(eyebrow || title) && (
          <div className={`section-head ${visible ? "is-visible" : ""}`}>
            {eyebrow && (
              <span className="eyebrow-pill">
                <span className="eyebrow-dot" aria-hidden="true" />
                {eyebrow}
              </span>
            )}
            {title && <h2>{title}</h2>}
          </div>
        )}

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
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}