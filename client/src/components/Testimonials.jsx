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

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);

  const DOT_COUNT = 5;
  const cardsPerDot = Math.ceil(testimonials.length / DOT_COUNT);

  const scrollToCard = (i) => {
    const card = cardRefs.current[i];
    const track = trackRef.current;
    if (!card || !track) return;
    const trackRect = track.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const offset = cardRect.left - trackRect.left + track.scrollLeft;
    track.scrollTo({ left: offset, behavior: "smooth" });
  };

  const scrollToDot = (dotIndex) => {
    scrollToCard(dotIndex * cardsPerDot);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const trackRect = track.getBoundingClientRect();
        const trackCenter = trackRect.left + trackRect.width / 2;
        let closest = 0;
        let closestDist = Infinity;
        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.left + cardRect.width / 2;
          const dist = Math.abs(cardCenter - trackCenter);
          if (dist < closestDist) {
            closestDist = dist;
            closest = i;
          }
        });
        setActive(Math.min(DOT_COUNT - 1, Math.floor(closest / cardsPerDot)));
        ticking = false;
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => track.removeEventListener("scroll", onScroll);
  }, [cardsPerDot]);

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
            Notes from learners who've been through our evening batches.
          </p>
        </div>

        <div className="testimonials-scroll" ref={trackRef}>
          <div className="testimonials-track">
            {testimonials.map((t, i) => (
              <div
                className="testimonial-card"
                key={t.name}
                ref={(el) => (cardRefs.current[i] = el)}
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