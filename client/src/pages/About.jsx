import heroImg from "../assets/about-hero.jpg"; // swap for your actual office/learning photo

export default function About() {
  return (
    
    <div className="about-page">
      {/* ================= HERO ================= */}
      <section className="about-hero">
  <div className="about-hero-container" data-reveal>

    <div className="about-eyebrow">
      <span className="about-eyebrow-dot"></span>
      <span>ABOUT HANUMADAKSHITA</span>
    </div>

    <h1 className="about-hero-title">
      Building skills for a{" "}
      <span>changing world.</span>
    </h1>

    <p className="about-hero-description">
      Hanumadakshita Evolving Skills Pvt. Ltd. is a technology-focused
      learning institute dedicated to helping students and learners
      develop practical skills through structured training, hands-on
      learning, and real-world projects.
    </p>

    <div className="about-hero-stats">

      <div className="about-stat">
        <strong>2024</strong>
        <span>Established</span>
      </div>

      <div className="about-stat">
        <strong>4+</strong>
        <span>Courses</span>
      </div>

      <div className="about-stat">
        <strong>100+</strong>
        <span>Learners</span>
      </div>

      <div className="about-stat">
        <strong>100%</strong>
        <span>Practical Learning</span>
      </div>

    </div>

  </div>
</section>
      {/* ================= WHAT WE STAND FOR ================= */}
      <section>
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow-pill">What We Stand For</span>
            <h2>
              Learning that leads to <span className="accent">real skills.</span>
            </h2>
            <p className="section-sub">
              Our approach is built around a simple belief: understanding is
              only the beginning.
            </p>
          </div>

          <div className="program-benefits-grid" data-reveal-group>
            {[
              {
                title: "Practical Learning",
                desc: "Learn by understanding concepts and applying them through hands-on practice.",
                tag: "LEARN / PRACTICE",
              },
              {
                title: "Real-World Projects",
                desc: "Work on practical projects that help connect classroom learning with real implementation.",
                tag: "BUILD / APPLY",
              },
              {
                title: "Personal Guidance",
                desc: "Learn with trainers who explain concepts clearly and provide guidance throughout the learning journey.",
                tag: "GUIDANCE / SUPPORT",
              },
              {
                title: "Continuous Growth",
                desc: "Technology keeps evolving, and so should your skills. We encourage learners to keep learning and improving.",
                tag: "GROW / EVOLVE",
              },
            ].map((item, i) => (
              <div className="benefit-card is-visible" data-reveal-item key={item.title}>
                {i > 0 && <span className="benefit-divider" />}                
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <p style={{ marginTop: "14px", fontSize: "0.72rem", fontWeight: 700, color: "var(--blue)" }}>
                  {item.tag}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR FOUNDATION ================= */}
      <section className="career-guidance">
        <div className="container">
          <div className="section-head left" data-reveal>
            <span className="eyebrow-pill">Our Foundation</span>
            <h2>
              What drives <span className="accent">Hanumadakshita.</span>
            </h2>
          </div>

          <div className="hero-stats" style={{ maxWidth: "none", marginTop: "40px" }} data-reveal-group>
            {[
              {
                label: "Mission",
                title: "Empowering future tech leaders.",
                desc: "Through industry-focused education and unlimited career opportunities.",
                tag: "Education / Career Transformation",
              },
              {
                label: "Vision",
                title: "Bridge learning and industry.",
                desc: "Creating a future-ready workforce through cutting-edge education.",
                tag: "Future / Innovation",
              },
              {
                label: "Values",
                title: "Guided by student success.",
                desc: "Innovation, excellence, and an unwavering commitment to outcomes.",
                tag: "Excellence / Commitment",
              },
            ].map((item, i, arr) => (
              <div className="hero-stat" data-reveal-item key={item.label} style={{ alignItems: "flex-start", flex: 1 }}>
                
                <div className="hero-stat-text" style={{ maxWidth: "260px" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--blue)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {item.label}
                  </span>
                  <strong style={{ fontSize: "1.02rem", marginTop: "6px" }}>{item.title}</strong>
                  <span style={{ color: "var(--muted)", fontSize: "0.85rem", marginTop: "8px" }}>
                    {item.desc}
                  </span>
                  <span style={{ marginTop: "10px", fontWeight: 700, color: "var(--blue)", fontSize: "0.72rem" }}>
                    {item.tag}
                  </span>
                </div>
                {i < arr.length - 1 && <span className="hero-stat-divider" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEARNING APPROACH ================= */}
      <section>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px" }}>
            <div className="section-head left" style={{ marginBottom: 0 }} data-reveal>
              <span className="eyebrow-pill">Our Learning Approach</span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", marginTop: "56px", flexWrap: "wrap" }} data-reveal-group>
            {[
              { n: "01", title: "Learn", desc: "Build a strong foundation with clear concepts." },
              { n: "02", title: "Practice", desc: "Strengthen your understanding through exercises and guided practice." },
              { n: "03", title: "Build", desc: "Apply your knowledge by working on practical and real-world projects." },
              { n: "04", title: "Evolve", desc: "Keep improving your skills, confidence, and ability to solve problems." },
            ].map((step, i, arr) => (
              <div key={step.n} data-reveal-item style={{ display: "flex", alignItems: "flex-start", gap: "20px", flex: "1 1 200px" }}>
                <div>
                  
                  <p style={{ marginTop: "14px", fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--blue)" }}>
                    {step.n}
                  </p>
                  <h3 style={{ fontSize: "1.05rem", color: "var(--ink)", marginTop: "2px" }}>{step.title}</h3>
                  <p style={{ marginTop: "8px", color: "var(--muted)", fontSize: "0.88rem", maxWidth: "22ch" }}>
                    {step.desc}
                  </p>
                </div>
                {i < arr.length - 1 && (
                  <span style={{ marginTop: "18px", color: "var(--blue)", fontSize: "1.2rem" }}>→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= REGISTRATION / LEGAL DETAILS ================= */}
      {/* <section>
        <div className="container about-registration">
          <h3>Company registration</h3>
          <dl>
            <div>
              <dt>Registered as</dt>
              <dd>Hanumadakshita Evolving Skills Private Limited</dd>
            </div>
            <div>
              <dt>CIN</dt>
              <dd>U85499AP2024PTC115363</dd>
            </div>
            <div>
              <dt>Incorporated</dt>
              <dd>12 July 2024</dd>
            </div>
            <div>
              <dt>Registrar of Companies</dt>
              <dd>RoC-Vijayawada</dd>
            </div>
          </dl>
        </div>
      </section> */}
      
    </div>
  );
}