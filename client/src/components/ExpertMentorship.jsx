import { Link } from "react-router-dom";
import "../styles/styles.css";

const features = [
  {
    title: "Practicing Instructors",
    text: "Learn from trainers who write and review real code, not just slides.",
    path: "M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.3 0-8 1.7-8 5v1h16v-1c0-3.3-4.7-5-8-5Z",
  },
  {
    title: "Personalized Feedback",
    text: "Get one-on-one feedback on your code and progress, not generic notes.",
    path: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 15a5 5 0 1 1 5-5 5 5 0 0 1-5 5Zm0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3Z",
  },
  {
    title: "Evening Doubt Sessions",
    text: "Stuck between classes? Reach out and get unblocked before the next session.",
    path: "M4 4h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4V5a1 1 0 0 1 1-1Z",
  },
  {
    title: "Real Project Work",
    text: "Every track ends with a project you build yourself, not a template.",
    path: "M9.4 8.6 6 12l3.4 3.4 1.2-1.2L8.4 12l2.2-2.2Zm5.2 0-1.2 1.2L15.6 12l-2.2 2.2 1.2 1.2L18 12ZM4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v3h16V6H4Z",
  },
];

export default function ExpertMentorship() {
  return (
    <section className="expert-mentorship">
      <div className="container em-top">
        <div className="em-copy">
          <span className="eyebrow-pill solid">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.3 0-8 1.7-8 5v1h16v-1c0-3.3-4.7-5-8-5Z" />
            </svg>
            EXPERT MENTORSHIP
          </span>
          <h2>
            Our Trainers Will
            <br />
            <span className="accent">Guide You From Day One</span>
          </h2>
          <span className="underline-accent" />
          <p className="section-sub">
            Small evening batches mean real back-and-forth with an
            instructor — not a recorded lecture you watch alone.
          </p>

          <div className="em-grid">
            {features.map((f) => (
              <div className="em-card" key={f.title}>
                <span className="em-card-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d={f.path} />
                  </svg>
                </span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---- floating glass card collage (no photo placeholders) ---- */}
        <div className="em-visual" aria-hidden="true">
          <div className="left-card" id="card-qe">
            <div className="float-icon icon-qe">
              <svg viewBox="0 0 576 512">
                <path d="M321.8 54.1L298.2 6.3c-3.9-8.3-16.1-8.6-20.4 0l-23.6 47.8-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-26.5 0-48 21.5-48 48l0 160c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48l-64 0zM48 320c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-64 0zM416 432l0 32c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-32c0-26.5-21.5-48-48-48l-64 0c-26.5 0-48 21.5-48 48z" />
              </svg>
            </div>
            <div className="float-text">
              <strong className="float-title">Quality Education</strong>
              <p>Industry-relevant courses designed by experts.</p>
            </div>
          </div>

          <div className="left-card" id="card-community">
            <div className="float-icon icon-community">
              <svg viewBox="0 0 640 512">
                <path d="M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z" />
              </svg>
            </div>
            <div className="float-text">
              <strong className="float-title">Community</strong>
              <p>A network of learners and mentors who push each other forward.</p>
            </div>
          </div>

          <div className="float-card" id="card-hands">
            <div className="float-icon icon-green">
              <svg viewBox="0 0 640 512">
                <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
              </svg>
            </div>
            <div className="float-text">
              <strong className="float-title">Hands-on</strong>
              <strong className="float-title">Projects</strong>
              <div style={{ display: "flex" }}>
                <div className="float-underline" style={{ background: "#22c55e" }} />
                <div className="float-underline" style={{ background: "#e0f8e9" }} />
              </div>
            </div>
          </div>

          <div className="float-card" id="card-code">
            <div className="code-block">
              <div className="code-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green-dot" />
              </div>
              <pre>
                <code>
                  <span className="c-keyword">function</span>{" "}
                  <span className="c-fn-name">learn</span>
                  <span className="c-punc">()</span>{" "}
                  <span className="c-brace">{"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="c-fn-call">improve</span>
                  <span className="c-punc">()</span>
                  <span className="c-semi">;</span>
                  {"\n"}
                  {"  "}
                  <span className="c-fn-call">succeed</span>
                  <span className="c-punc">()</span>
                  <span className="c-semi">;</span>
                  {"\n"}
                  <span className="c-brace">{"}"}</span>
                </code>
              </pre>
            </div>
          </div>

          <div className="left-card" id="card-vision">
            <div className="float-icon icon-vision">
              <svg viewBox="0 0 640 512">
                <path d="M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z" />
              </svg>
            </div>
            <div className="float-text">
              <strong className="float-title">Vision</strong>
              <p>To become the world's most trusted platform for skill development and lifelong learning.</p>
            </div>
          </div>

        </div>
      </div>

      <div className="container">
        <div className="em-banner">
          <div className="em-banner-illustration" aria-hidden="true">
            <span>👩‍💻</span>
            <span>👨‍🏫</span>
          </div>
          <div className="em-banner-text">
            <h3>Learn. Build. Get Hired.</h3>
            <p>Our instructors are here to support and guide you to your first offer.</p>
          </div>
          <Link to="/enroll" className="btn btn-outline-blue">
            Start Your Journey <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}