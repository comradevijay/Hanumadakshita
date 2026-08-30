import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/client";
import "../styles/styles.css";

const iconFor = {
  "python-full-stack": { bg: "#eaf0ff", fg: "#2f5eff", path: "M12 2c-3 0-4 1.3-4 3v2h4v.8H6.8C4.6 7.8 3 9.6 3 12.4c0 2.7 1.5 4.6 3.8 4.6H8v-2.4c0-2 1.7-3.4 4-3.4h3.6c2 0 3.4-1.4 3.4-3.4V5c0-1.7-1-3-4.4-3H12Zm-1.5 2.2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" },
  "java-full-stack": { bg: "#fff1e6", fg: "#f5921e", path: "M9 3.2c-.5 1 1.6 1.9.3 3.1-2.6 2.4 1 3.9 1 3.9s-1.4.9.4 1.9c-2.4.4-6.3-.3-6.3-2 0-1.3 2-1.2 2-1.2s-2.5-.4-2.5-2.1c0-1.5 2.6-1.7 2.6-1.7s-1.9-1-.5-2.9c.5-.6 3-1 3-1Zm-3 13.4c0 1.4 3 2.6 6.7 2.6s6.7-1.2 6.7-2.6c0-.7-.7-1.3-1.9-1.8.2.3.3.6.3.9 0 1.2-2.3 2.1-5.1 2.1s-5.1-.9-5.1-2.1c0-.3.1-.6.3-.9-1.2.5-1.9 1.1-1.9 1.8Z" },
  "web-development": { bg: "#f1eaff", fg: "#7c5cff", path: "M9.4 8.6 6 12l3.4 3.4 1.2-1.2L8.4 12l2.2-2.2Zm5.2 0-1.2 1.2L15.6 12l-2.2 2.2 1.2 1.2L18 12ZM4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v3h16V6H4Z" },
  "sql-mongodb": { bg: "#e6f7ef", fg: "#16a06a", path: "M12 3c-4.4 0-8 1.3-8 3v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6c0-1.7-3.6-3-8-3Zm0 2c3.6 0 6 1 6 1s-2.4 1-6 1-6-1-6-1 2.4-1 6-1Zm-6 3.6c1.5.7 3.7 1 6 1s4.5-.3 6-1V11c0 .5-2.4 1.4-6 1.4S6 11.5 6 11V8.6Zm0 4.9c1.5.7 3.7 1 6 1s4.5-.3 6-1v2.4c0 .5-2.4 1.4-6 1.4s-6-.9-6-1.4v-2.4Zm0 4.9c1.5.7 3.7 1 6 1s4.5-.3 6-1V19c0 .5-2.4 1.4-6 1.4S6 19.5 6 19v-1.6Z" },
};

export default function CourseOffered() {
  const [courses, setCourses] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    api
      .getCourses()
      .then((data) => {
        setCourses(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <section className="course-offered">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow-pill">COURSE OFFERED</span>
          <h2>
            Explore Our <span className="accent">Courses</span>
          </h2>
          <span className="underline-accent" />
          <p className="section-sub">
            Four evening tracks designed to build in-demand skills and get
            you interview-ready.
          </p>
        </div>

        {status === "loading" && <p className="course-offered-status">Loading courses…</p>}
        {status === "error" && (
          <p className="course-offered-status">
            Couldn't load courses — make sure the backend server is running.
          </p>
        )}

        <div className="course-offered-grid">
          {courses.map((c) => {
            const icon = iconFor[c.slug] || iconFor["web-development"];
            const seatsLeft = c.seatsTotal - c.seatsFilled;
            return (
              <div className="course-offered-card" key={c._id}>
                <span className="course-offered-icon" style={{ background: icon.bg, color: icon.fg }}>
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                    <path d={icon.path} />
                  </svg>
                </span>
                <h3>{c.title}</h3>
                <span className="underline-accent" style={{ margin: "8px 0 12px" }} />
                <p>{c.tagline}</p>
                <div className="course-offered-footer">
                  <Link to={`/courses/${c.slug}`} className="course-offered-link">
                    View Details <span aria-hidden="true">→</span>
                  </Link>
                  <Link
                    to={`/enroll?course=${c.slug}`}
                    className="course-offered-arrow"
                    aria-label={`Enroll in ${c.title}`}
                  >
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <span className={`course-offered-seats ${seatsLeft <= 3 ? "low" : ""}`}>
                  {seatsLeft > 0 ? `${seatsLeft} seats left` : "Batch full"}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
