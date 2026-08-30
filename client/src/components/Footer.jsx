import { Link } from "react-router-dom";
import "../styles/styles.css";

const courseLinks = [
  { slug: "python-full-stack", title: "Python Full Stack" },
  { slug: "java-full-stack", title: "Java Full Stack" },
  { slug: "web-development", title: "Web Development" },
  { slug: "sql-mongodb", title: "SQL & MongoDB" },
];

const socialLinks = [
  {
    name: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/hanumadakshita_evolving_skills/",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1.2em"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
      </svg>
    ),
  },
  {
    name: "youtube",
    label: "YouTube",
    href: "https://youtube.com/@hanumadakshitaevolvingskills",
    svg: (
      <svg
        viewBox="0 0 24 24"
        height="1.2em"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.9 4 12 4 12 4s-3.9 0-6.7.2c-.4 0-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2.2 9 2.2 10.7v1.6c0 1.8.2 3.5.2 3.5s.2 1.5.8 2.1c.8.8 1.9.8 2.3.9 1.7.2 7 .2 7 .2s3.9 0 6.7-.2c.4-.1 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.5v-1.6c0-1.7-.2-3.5-.2-3.5ZM9.9 14.6V8.9l5.4 2.9-5.4 2.8Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="m12 3-9 4.5 9 4.5 7.2-3.6V13h1.4V7.5L12 3ZM6.6 10.4v3.5c0 1.5 2.4 2.7 5.4 2.7s5.4-1.2 5.4-2.7v-3.5L12 12.6l-5.4-2.2Z" />
              </svg>
            </span>
            Hanuma<span>dakshita</span>
          </div>
          <p className="footer-tagline">Learn. Practice. Get Hired.</p>
          <p className="footer-desc">
            An evening-batch coding academy in Madanapalle, AP, running live
            Python, Java, web development, and database courses, Monday to
            Friday.
          </p>

          <ul className="footer-social">
            {socialLinks.map((s) => (
              <li className="icon-content" key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  data-social={s.name}
                >
                  <span className="filled" aria-hidden="true" />
                  {s.svg}
                </a>
                <div className="tooltip">{s.label}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Courses</h4>
          {courseLinks.map((c) => (
            <Link key={c.slug} to={`/courses/${c.slug}`}>{c.title}</Link>
          ))}
          <Link to="/courses" className="footer-view-all">View All Courses →</Link>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/enroll">Reserve a Seat</Link>
        </div>

        <div className="footer-col">
          <h4>Reach Us</h4>
          <a href="tel:+919573832026">+91 95738 32026</a>
          <a href="mailto:charankaramala49@gmail.com">charankaramala49@gmail.com</a>
          <a href="https://wa.me/919573832026" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          <span>No. 16/497, Lachhareddy Street,<br />Madanapalle, Chittoor, AP 517325</span>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Hanumadakshita Evolving Skills Pvt. Ltd.</span>
        <span>CIN U85499AP2024PTC115363</span>
      </div>
    </footer>
  );
}