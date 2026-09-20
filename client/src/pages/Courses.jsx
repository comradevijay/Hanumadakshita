import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/client";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const StarIcon = ({ filled }) => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    fill={filled ? "var(--orange)" : "none"}
    stroke="var(--orange)"
    strokeWidth="1.5"
  >
    <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7L12 17.3 5.7 21.2l1.7-7-5.4-4.7 7.1-.6L12 2Z" />
  </svg>
);

// Small local icon set keyed by keywords found in the course title/stack,
// so each card gets a distinct mark instead of the same generic book icon.
const COURSE_ICON_SET = [
  {
    match: ["java", "spring"],
    bg: "rgba(255, 237, 213, 0.9)",
    color: "#c2703d",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 21c3 1.2 8 1.2 11 0" />
        <path d="M9 17c-2 .6-3 1.5-3 2.4 0 1.6 3 2.6 7 2.6" />
        <path d="M13 3c-1.5 1.8-1.5 3.2 0 5-1.8 1.6-1.8 3.4 0 5" />
        <path d="M9.5 15c4 1 7-.3 7-2" />
      </svg>
    ),
  },
  {
    match: ["python", "django", "flask"],
    bg: "rgba(224, 244, 225, 0.9)",
    color: "#2f7d3a",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3c-3.3 0-4 1-4 3v2h4" />
        <rect x="6" y="6" width="6" height="4" rx="1.5" />
        <path d="M12 21c3.3 0 4-1 4-3v-2h-4" />
        <rect x="12" y="14" width="6" height="4" rx="1.5" />
      </svg>
    ),
  },
  {
    match: ["sql", "mongo", "database"],
    bg: "rgba(224, 236, 249, 0.9)",
    color: "#2f5eff",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
        <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    ),
  },
  {
    match: ["web", "html", "css", "javascript", "react"],
    bg: "rgba(241, 235, 255, 0.9)",
    color: "#7c5cff",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <path d="M8 14l-2 2 2 2" />
        <path d="M13 14l2 2-2 2" />
      </svg>
    ),
  },
];

const DEFAULT_ICON = {
  bg: "var(--blue-soft)",
  color: "var(--blue)",
  icon: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H20v15H6.5A2.5 2.5 0 0 0 4 21.5v-15Z" />
      <path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20" />
    </svg>
  ),
};

function getCourseIcon(course) {
  const haystack = [course.title, ...(course.stack || [])].join(" ").toLowerCase();
  return COURSE_ICON_SET.find((entry) => entry.match.some((kw) => haystack.includes(kw))) ?? DEFAULT_ICON;
}

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [status, setStatus] = useState("loading");
  const [activeCategory, setActiveCategory] = useState("All Courses");

  useEffect(() => {
    api
      .getCourses()
      .then((data) => {
        setCourses(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  // Pull categories from whatever the courses actually have, so the
  // pill row never shows a filter with zero matching courses.
  const categories = useMemo(() => {
    const found = new Set(courses.map((c) => c.category).filter(Boolean));
    return ["All Courses", ...found];
  }, [courses]);

  const visibleCourses =
    activeCategory === "All Courses"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  return (
    <section className="courses-page">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow-pill">All Courses</span>
          <h1>Pick a track, start next batch</h1>
          <p className="section-sub">
            Every course runs live, Monday through Friday.
            Seats are capped so each learner gets real feedback.
          </p>
        </div>

        {categories.length > 1 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "36px",
            }}
          >
            {categories.map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={isActive ? "eyebrow-pill solid" : "eyebrow-pill"}
                  style={{
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    textTransform: "none",
                    letterSpacing: "normal",
                    padding: "10px 22px",
                    border: isActive ? "none" : "1px solid var(--line)",
                    background: isActive ? undefined : "transparent",
                    color: isActive ? undefined : "var(--charcoal)",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}

        {status === "loading" && <PageLoader label="Loading course" />}
        {status === "error" && (
          <p style={{ marginTop: "40px", textAlign: "center" }}>
            Couldn't load courses — check that the backend server is running.
          </p>
        )}

        {status === "ready" && (
          <div className="course-offered-grid" style={{ marginTop: "48px" }}>
            {visibleCourses.map((c) => {
              const seatsLeft = c.seatsTotal - c.seatsFilled;
              const isFull = seatsLeft <= 0;
              const half = Math.ceil(c.stack.length / 2);
              const colA = c.stack.slice(0, half);
              const colB = c.stack.slice(half);
              const courseIcon = getCourseIcon(c);

              return (
                <div className="course-offered-card" key={c._id}>
                  

                  <h3>{c.title}</h3>

                  {c.stack?.length > 0 && (
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "8px 12px",
                        margin: "16px 0",
                      }}
                    >
                      {[colA, colB].map((col, i) => (
                        <div key={i} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          {col.map((s) => (
                            <span
                              key={s}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                                fontSize: "0.85rem",
                                color: "var(--charcoal)",
                              }}
                            >
                              <span style={{ color: "var(--blue)", flexShrink: 0 }}>
                                <CheckIcon />
                              </span>
                              {s}
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}

                  {typeof c.rating === "number" && (
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "12px" }}>
                      <span style={{ display: "flex", gap: "2px" }}>
                        {[1, 2, 3, 4, 5].map((n) => (
                          <StarIcon key={n} filled={n <= Math.round(c.rating)} />
                        ))}
                      </span>
                      <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
                        {c.rating.toFixed(1)}
                        {c.reviewsCount ? ` (${c.reviewsCount} Reviews)` : ""}
                      </span>
                    </div>
                  )}

                  <div
                    className="course-offered-footer"
                    style={{ marginTop: "auto", paddingTop: "14px", borderTop: "1px solid var(--line)", justifyContent: "center" }}
                  >
                    <Link
                      to={isFull ? "#" : `/courses/${c.slug}`}
                      className="btn btn-primary"
                      style={{ padding: "10px 22px", fontSize: "0.85rem", width: "100%", textAlign: "center" }}
                      aria-disabled={isFull}
                      tabIndex={isFull ? -1 : undefined}
                    >
                      {isFull ? "Batch Full" : "View Details"}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}