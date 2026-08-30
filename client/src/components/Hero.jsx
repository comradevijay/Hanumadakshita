import { Link } from "react-router-dom";
import HeroBackground from "./HeroBackground";
import "../styles/styles.css";

export default function Hero() {
  return (
    <section className="hero">
      <HeroBackground />
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow-pill">LEARN • BUILD • GROW</span>
          <h1>
            Today Skills.
            <br />
            <span className="hero-accent">Tomorrow Career.</span>
          </h1>
          <span className="underline-accent" />
          <p className="hero-sub">
            Industry-focused training with real projects, practical learning, and the skills employers are looking which makes you job ready.
          </p>
          <div className="hero-actions">
            <Link to="/courses" className="btn btn-primary">
              Explore Courses <span aria-hidden="true">→</span>
            </Link>
            <a
              className="btn btn-white"
              href="https://wa.me/919573832026"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="var(--green)">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.05-1.33A10 10 0 1 0 12 2Zm0 18.2a8.15 8.15 0 0 1-4.16-1.14l-.3-.18-3 .79.8-2.93-.19-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.13c-.24-.12-1.44-.71-1.66-.79s-.39-.12-.55.12-.63.79-.78.95-.28.18-.53.06a6.68 6.68 0 0 1-1.97-1.22 7.4 7.4 0 0 1-1.36-1.7c-.14-.24 0-.37.11-.49s.24-.28.36-.42a1.6 1.6 0 0 0 .24-.4.44.44 0 0 0 0-.42c-.06-.12-.55-1.33-.76-1.82s-.4-.41-.55-.42h-.47a.9.9 0 0 0-.66.31 2.75 2.75 0 0 0-.86 2 4.79 4.79 0 0 0 1 2.53 10.9 10.9 0 0 0 4.2 3.72c.59.25 1.05.4 1.41.51a3.4 3.4 0 0 0 1.56.1 2.55 2.55 0 0 0 1.67-1.18 2.07 2.07 0 0 0 .15-1.18c-.06-.1-.22-.16-.46-.28Z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}