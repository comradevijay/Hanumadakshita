import { Link } from "react-router-dom";
	import "../styles/styles.css";

const cards = [
  {
    title: "Career Assessment",
    color: "#eaf0ff",
    fg: "#2f5eff",
    text: "Talk through your interests and background to find the right track for you.",
    path: "M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.3 0-8 1.7-8 5v1h16v-1c0-3.3-4.7-5-8-5Z",
  },
  {
    title: "Personalized Roadmaps",
    color: "#e6f7ef",
    fg: "#16a06a",
    text: "Get a week-by-week plan for your course based on your pace and goals.",
    path: "M12 2 3 6v6c0 5 3.8 9.3 9 10 5.2-.7 9-5 9-10V6l-9-4Zm0 5.5 3.5 2v3.4L12 15l-3.5-2.1V9.5L12 7.5Z",
  },
  {
    title: "Industry Insights",
    color: "#fff1e6",
    fg: "#f5921e",
    text: "Stay current on which tools and frameworks local hiring actually asks for.",
    path: "M9 2h6v2h5v2H4V4h5V2Zm-3 6h12l-1 12H7L6 8Z",
  },
  {
    title: "Resume & Profile Building",
    color: "#f1eaff",
    fg: "#7c5cff",
    text: "Build a resume and LinkedIn profile that actually reflects your projects.",
    path: "M6 2h9l5 5v15H6V2Zm8 1.5V8h4.5L14 3.5ZM8 12h8v1.5H8V12Zm0 3h8v1.5H8V15Zm0-6h4v1.5H8V9Z",
  },
  {
    title: "Interview Preparation",
    color: "#ffeef5",
    fg: "#ef5da8",
    text: "Run mock technical and HR rounds with feedback you can act on.",
    path: "M4 4h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4V5a1 1 0 0 1 1-1Z",
  },
  {
    title: "Goal Setting",
    color: "#eaf0ff",
    fg: "#2f5eff",
    text: "Set clear milestones for each course and track progress against them.",
    path: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 15a5 5 0 1 1 5-5 5 5 0 0 1-5 5Zm0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3Z",
  },
];

export default function CareerGuidance() {
  return (
    <section className="career-guidance">
      <div className="container career-guidance-top">
        <div className="career-guidance-copy">
          <span className="eyebrow-pill">CAREER GUIDANCE</span>
          <h2>
            Guiding You Towards
            <br />
            <span className="accent">A Successful Future</span>
          </h2>
          <span className="underline-accent" />
          <p className="section-sub">
            We help you make an informed choice of track and stay on pace to
            finish it — not just sign up and disappear.
          </p>
        </div>

      </div>

      <div className="container career-guidance-grid">
        {cards.map((c) => (
          <div className="cg-card" key={c.title}>
            <span className="cg-card-icon" style={{ background: c.color, color: c.fg }}>
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d={c.path} />
              </svg>
            </span>
            <h3>{c.title}</h3>
            <span className="underline-accent" style={{ margin: "8px 0 10px" }} />
            <p>{c.text}</p>
            <Link to="/contact" className="cg-card-arrow" aria-label={`Ask about ${c.title}`}>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        ))}
      </div>

      <div className="container">
        <div className="career-guidance-banner">
          <span className="cg-banner-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M12 1a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Zm7 9a7 7 0 0 1-14 0H3a9 9 0 0 0 8 8.94V22h2v-3.06A9 9 0 0 0 21 10Z" />
            </svg>
          </span>
          <div className="career-guidance-banner-text">
            <h3>We're Here to Help You Succeed</h3>
            <p>Have a question before you enroll? We're happy to talk it through.</p>
          </div>
          <a href="https://wa.me/919573832026" target="_blank" rel="noreferrer" className="btn btn-primary">
            Talk to Us <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
