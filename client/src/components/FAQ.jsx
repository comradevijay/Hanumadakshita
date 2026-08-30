import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const faqs = [
  {
    q: "What courses do you offer?",
    a: "We offer four evening tracks: Python Full Stack, Java Full Stack, Web Development, and SQL & MongoDB — each built to take you from fundamentals to a working project.",
  },
  {
    q: "Are the courses suitable for beginners?",
    a: "Yes. Web Development and SQL & MongoDB assume no prior coding background. Python and Java Full Stack move faster, so basic programming familiarity helps.",
  },
  {
    q: "How are the classes conducted?",
    a: "Classes run live, Monday to Friday in the evening, both in-person at our Madanapalle office and online for remote learners.",
  },
  {
    q: "Will I get study materials?",
    a: "Yes, you'll get notes, code samples, and practice problems for each module covered in class.",
  },
  {
    q: "Is there any lifetime access to the course?",
    a: "You keep access to your batch's materials and recordings after the course ends. Talk to us for specifics on your track.",
  },
  {
    q: "How can I enroll in a course?",
    a: "Use the Reserve a Seat button on any course page, or reach out directly by phone or WhatsApp — we'll confirm your seat and next batch start date.",
  },
];

function FaqIllustration() {
  return (
    <svg
      viewBox="0 0 200 200"
      width="180"
      height="180"
      role="img"
      aria-label="Question and answer illustration"
    >
      {/* background blob */}
      <path
        d="M40 70 C20 90 20 130 50 145 C75 158 95 150 120 155 C150 160 175 140 172 108 C170 80 150 60 120 62 C100 63 95 45 75 48 C58 51 55 55 40 70Z"
        fill="var(--blue-pale)"
      />
      {/* darker accent blob (bottom-left swoosh) */}
      <path
        d="M30 95 C15 105 12 125 25 138 C36 149 52 148 58 135 C64 122 55 112 62 100 C68 90 60 78 48 80 C40 81 40 88 30 95Z"
        fill="var(--blue)"
        opacity="0.85"
      />
      <rect x="34" y="150" width="20" height="26" rx="8" fill="var(--blue)" />

      {/* chat bubble */}
      <rect x="52" y="58" width="96" height="72" rx="16" fill="var(--white)" />
      <path d="M70 130 L70 148 L92 130 Z" fill="var(--white)" />

      {/* lines of text inside bubble */}
      <rect x="68" y="76" width="60" height="6" rx="3" fill="var(--blue)" />
      <rect x="68" y="92" width="48" height="6" rx="3" fill="var(--blue)" opacity="0.7" />
      <rect x="68" y="108" width="34" height="6" rx="3" fill="var(--blue)" opacity="0.5" />

      {/* pen crossing the bubble */}
      <g transform="rotate(45 128 78)">
        <rect x="123" y="45" width="10" height="52" rx="3" fill="var(--ink)" />
        <rect x="123" y="40" width="10" height="10" rx="2" fill="#d9a066" />
        <path d="M123 97 L133 97 L128 109 Z" fill="#d9a066" />
      </g>

      {/* floating dots */}
      <circle cx="46" cy="46" r="5" fill="var(--blue-pale)" />
      <circle cx="168" cy="98" r="6" fill="var(--blue-pale)" />
      <circle cx="118" cy="176" r="5" fill="var(--blue-pale)" />

      {/* question marks */}
      <text
        x="132"
        y="46"
        fontFamily="var(--font-display)"
        fontSize="34"
        fontWeight="700"
        fill="var(--blue)"
      >
        ?
      </text>
      <text
        x="150"
        y="166"
        fontFamily="var(--font-display)"
        fontSize="26"
        fontWeight="700"
        fill="var(--blue)"
      >
        ?
      </text>
    </svg>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow-pill">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M4 4h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4V5a1 1 0 0 1 1-1Z" /></svg>
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2>Have Questions? We're Here to Help!</h2>
          <span className="underline-accent" />
          <p className="section-sub">
            Find answers to the most common questions about our courses and how classes run.
          </p>
        </div>

        <div className="faq-layout">
          <div className="faq-side">
            <div className="faq-side-illustration" aria-hidden="true">
              <FaqIllustration />
            </div>
            <div className="faq-help-card">
              <span className="faq-help-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 1a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Zm7 9a7 7 0 0 1-14 0H3a9 9 0 0 0 8 8.94V22h2v-3.06A9 9 0 0 0 21 10Z" /></svg>
              </span>
              <div>
                <h3>Still have questions?</h3>
                <p>Our team is ready to help you.</p>
                <Link to="/contact" className="btn btn-outline-blue faq-help-btn">
                  Contact Us <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="faq-list">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div className={`faq-item ${isOpen ? "is-open" : ""}`} key={item.q}>
                  <button
                    className="faq-item-head"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-mark">Q</span>
                    <span className="faq-question">{item.q}</span>
                    <span className="faq-chevron" aria-hidden="true">{isOpen ? "▲" : "▼"}</span>
                  </button>
                  {isOpen && <p className="faq-answer">{item.a}</p>}
                </div>
              );
            })}
          </div>
        </div>

        <div className="faq-footer-note">
          <span className="faq-footer-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.01L12 12l8-5.99V6H4Zm16 2.24-7.4 5.55a1 1 0 0 1-1.2 0L4 8.24V18h16V8.24Z" /></svg>
          </span>
          <div>
            <strong>Can't find your answer?</strong>
            <p>
              Reach out to us at{" "}
              <a href="mailto:charankaramala49@gmail.com">charankaramala49@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}