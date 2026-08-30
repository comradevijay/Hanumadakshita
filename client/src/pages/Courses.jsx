import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/client";


export default function Courses() {
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
    <section className="courses-page">
      <div className="container">
        <span className="eyebrow">All courses</span>
        <h1>Pick a track, start next batch</h1>
        <p className="courses-intro">
          Every course runs live, in the evening, Monday through Friday.
          Seats are capped so each learner gets real feedback.
        </p>

        {status === "loading" && <p>Loading courses…</p>}
        {status === "error" && (
          <p>Couldn't load courses — check that the backend server is running.</p>
        )}

        <div className="courses-list">
          {courses.map((c) => {
            const seatsLeft = c.seatsTotal - c.seatsFilled;
            return (
              <div className="course-row" key={c._id}>
                <div className="course-row-main">
                  <h2>{c.title}</h2>
                  <p>{c.description}</p>
                  <div className="course-row-stack">
                    {c.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>
                <div className="course-row-side">
                  <span className="course-row-duration">{c.duration}</span>
                  <span className="course-row-schedule">{c.schedule}</span>
                  <span className={`course-row-seats ${seatsLeft <= 3 ? "low" : ""}`}>
                    {seatsLeft > 0 ? `${seatsLeft} seats left` : "Batch full"}
                  </span>
                  <Link to={`/courses/${c.slug}`} className="btn btn-primary">
                    View details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
