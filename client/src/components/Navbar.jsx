import { useState, useRef, useLayoutEffect, useCallback } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../styles/styles.css";

const courseLinks = [
  { slug: "python-full-stack", title: "Python Full Stack" },
  { slug: "java-full-stack", title: "Java Full Stack" },
  { slug: "web-development", title: "Web Development" },
  { slug: "sql-mongodb", title: "SQL & MongoDB" },
];

/**
 * Hidden, zero-size SVG that only exists to hold the <filter> definition
 * used by every liquid-glass surface in the navbar (the pill background,
 * the hover indicator, the courses dropdown, the mobile menu panel and
 * the hamburger toggle). It is rendered once, here, and referenced from
 * CSS via `backdrop-filter: url(#liquid-glass-distortion) ...`.
 *
 * Note: Chrome does not reliably apply backdrop-filter: url(#svg-filter)
 * referencing feImage/feDisplacementMap, so this is treated as a
 * progressive enhancement (chiefly for Safari/WebKit) layered on top of
 * a plain blur+saturate fallback that carries the glass look on Chrome.
 */
// function LiquidGlassFilter() {
//   return (
//     <svg
//       width="0"
//       height="0"
//       style={{ position: "absolute", overflow: "hidden" }}
//       aria-hidden="true"
//       focusable="false"
//     >
//       <defs>
//         <filter
//           id="liquid-glass-distortion"
//           colorInterpolationFilters="sRGB"
//           x="0%"
//           y="0%"
//           width="100%"
//           height="100%"
//         >
          
//           <feDisplacementMap
//             in="SourceGraphic"
//             in2="map"
//             result="dispRed"
//             scale="-20"
//             xChannelSelector="R"
//             yChannelSelector="G"
//           />
//           <feColorMatrix
//             in="dispRed"
//             type="matrix"
//             values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
//             result="red"
//           />
//           <feDisplacementMap
//             in="SourceGraphic"
//             in2="map"
//             result="dispGreen"
//             scale="-24"
//             xChannelSelector="R"
//             yChannelSelector="G"
//           />
//           <feColorMatrix
//             in="dispGreen"
//             type="matrix"
//             values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"
//             result="green"
//           />
//           <feDisplacementMap
//             in="SourceGraphic"
//             in2="map"
//             result="dispBlue"
//             scale="-28"
//             xChannelSelector="R"
//             yChannelSelector="G"
//           />
//           <feColorMatrix
//             in="dispBlue"
//             type="matrix"
//             values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
//             result="blue"
//           />
//           <feBlend in="red" in2="green" mode="screen" result="rg" />
//           <feBlend in="rg" in2="blue" mode="screen" result="output" />
//           <feGaussianBlur in="output" stdDeviation="3" />
//         </filter>
//       </defs>
//     </svg>
//   );
// }

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const closeTimer = useRef(null);
  const location = useLocation();

  const navRef = useRef(null);
  const linkRefs = useRef({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  const setLinkRef = (key) => (el) => {
    linkRefs.current[key] = el;
  };

  const measure = useCallback((el) => {
    if (!el || !navRef.current) return null;
    const navRect = navRef.current.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    return { left: elRect.left - navRect.left, width: elRect.width };
  }, []);

  const moveIndicatorTo = useCallback(
    (el) => {
      const rect = measure(el);
      if (rect) setIndicator({ ...rect, opacity: 1 });
    },
    [measure]
  );

  const resetToActive = useCallback(() => {
    setIndicator((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  useLayoutEffect(() => {
    resetToActive();
  }, [resetToActive, location.pathname]);

  useLayoutEffect(() => {
    const onResize = () => resetToActive();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [resetToActive]);

  const openDropdown = () => {
    clearTimeout(closeTimer.current);
    setCoursesOpen(true);
  };

  const closeDropdownDelayed = () => {
    closeTimer.current = setTimeout(() => setCoursesOpen(false), 150);
  };

  return (
    <>
      {/* <LiquidGlassFilter /> */}
      <header className="navbar">
        <div className="container navbar-inner">
          <NavLink to="/" className="navbar-brand" onClick={() => setOpen(false)}>
            <span className="navbar-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                <path d="M12 3 2 8l10 5 8-4.2V15h1.5V8L12 3Z" fill="currentColor" />
                <path d="M6 12.2V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-3.8l-6 3.15-6-3.15Z" fill="currentColor" opacity="0.55" />
              </svg>
            </span>
            <span className="navbar-name">
              HANUMADAKSHITA
              <em>Evolving Skills Pvt. Ltd.</em>
            </span>
          </NavLink>

          <nav
            className={`navbar-links ${open ? "is-open" : ""}`}
            ref={navRef}
            onMouseLeave={resetToActive}
          >
            <span
              className="nav-indicator"
              aria-hidden="true"
              style={{
                transform: `translateX(${indicator.left}px)`,
                width: `${indicator.width}px`,
                opacity: indicator.opacity,
              }}
            />

            <NavLink
              to="/"
              end
              ref={setLinkRef("home")}
              className={({ isActive }) => (isActive ? "active" : "")}
              onMouseEnter={(e) => moveIndicatorTo(e.currentTarget)}
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              ref={setLinkRef("about")}
              className={({ isActive }) => (isActive ? "active" : "")}
              onMouseEnter={(e) => moveIndicatorTo(e.currentTarget)}
              onClick={() => setOpen(false)}
            >
              About Us
            </NavLink>

            <div
              className="navbar-dropdown"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdownDelayed}
            >
              <button
                ref={setLinkRef("courses")}
                className={`navbar-dropdown-trigger ${coursesOpen ? "active" : ""}`}
                onClick={() => setCoursesOpen((o) => !o)}
                onMouseEnter={(e) => moveIndicatorTo(e.currentTarget)}
                aria-expanded={coursesOpen}
              >
                Courses
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {coursesOpen && (
                <div className="navbar-dropdown-menu">
                  <div className="navbar-dropdown-menu-inner">
                    {courseLinks.map((c) => (
                      <Link key={c.slug} to={`/courses/${c.slug}`} onClick={() => { setOpen(false); setCoursesOpen(false); }}>
                        {c.title}
                      </Link>
                    ))}
                    <Link to="/courses" className="navbar-dropdown-all" onClick={() => { setOpen(false); setCoursesOpen(false); }}>
                      View All Courses →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/contact"
              ref={setLinkRef("contact")}
              className={({ isActive }) => (isActive ? "active" : "")}
              onMouseEnter={(e) => moveIndicatorTo(e.currentTarget)}
              onClick={() => setOpen(false)}
            >
              Contact Us
            </NavLink>

            <a
              className="navbar-links-cta-mobile btn btn-primary"
              href="https://wa.me/919573832026"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              Chat on WhatsApp
            </a>
          </nav>

          <NavLink to="/enroll" className="btn btn-primary navbar-cta">
            Enquire Now
            <span aria-hidden="true">→</span>
          </NavLink>

          <button
            className="navbar-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
    </>
  );
}