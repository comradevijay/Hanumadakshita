import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProgramBenefits from "../components/Programbenefits";
import CourseRoadmap from "../components/CourseRoadmap";
import CourseCurriculum from "../components/CourseCurriculum";
import { api } from "../api/client";

// Swap in whatever icon set the rest of the site already uses — this
// is a small local lookup so the API can send plain strings
// (icon: "check") instead of the server needing to know about JSX.
const BENEFIT_ICONS = {
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 12l2 2 4-4" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
  mentor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7L12 17.3 5.7 21.2l1.7-7-5.4-4.7 7.1-.6L12 2Z" />
    </svg>
  ),
};

export default function CourseDetail() {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);
  const [status, setStatus] = useState("loading"); // "loading" | "ready" | "not-found" | "error"

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");

    api
      .getCourse(slug)
      .then((data) => {
        if (cancelled) return;
        setCourse(data);
        setStatus("ready");
      })
      .catch((err) => {
        console.error("Failed to load course:", err);
        if (cancelled) return;
        setStatus(err.status === 404 ? "not-found" : "error");
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (status === "loading") {
    return (
      <div className="course-detail-status">
        <p>Loading course…</p>
      </div>
    );
  }

  if (status === "not-found") {
    return (
      <div className="course-detail-status">
        <h2>Course not found</h2>
        <p>We couldn't find that course.</p>
        <Link to="/courses" className="btn btn-primary">
          View all courses
        </Link>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="course-detail-status">
        <h2>Something went wrong</h2>
        <p>Couldn't load this course right now — please try again shortly.</p>
        <Link to="/courses" className="btn btn-primary">
          View all courses
        </Link>
      </div>
    );
  }

  // status === "ready" — benefits/roadmap are optional on the model,
  // so guard against courses that don't have them filled in yet.
  const hasBenefits = course.benefits?.items?.length > 0;
  const hasRoadmap = course.roadmap?.phases?.length > 0;
  const hasCurriculum = course.curriculum?.modules?.length > 0;
  const seatsLeft = course.seatsTotal - course.seatsFilled;
  const isFull = seatsLeft <= 0;

  const benefitsWithIcons = hasBenefits
    ? {
        ...course.benefits,
        items: course.benefits.items.map((item) => ({
          ...item,
          icon: BENEFIT_ICONS[item.icon] ?? null,
        })),
      }
    : null;

  return (
    <div className="course-detail-page">
      <section className="section-head-wrap container">
        <div className="course-detail-inner">
          <div className="course-detail-main">
            <h1>{course.title}</h1>
            <p className="course-detail-tagline">{course.tagline}</p>

            {course.stack?.length > 0 && (
              <div className="course-detail-stack">
                {course.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            )}

            {course.description && (
              <p className="course-detail-desc">{course.description}</p>
            )}
          </div>

          <aside className="course-detail-side">
            <span className={`course-detail-seats ${seatsLeft <= 3 ? "low" : ""}`}>
              {isFull ? "Batch full" : `${seatsLeft} seat${seatsLeft === 1 ? "" : "s"} left`}
            </span>

            <Link
              to={isFull ? "#" : `/enroll?course=${course.slug}`}
              className={`btn btn-primary course-detail-cta ${isFull ? "disabled" : ""}`}
              aria-disabled={isFull}
              tabIndex={isFull ? -1 : undefined}
            >
              {isFull ? "Batch Full" : "Reserve My Seat"}
              {!isFull && <span aria-hidden="true">→</span>}
            </Link>

            <ul className="course-detail-facts">
              {course.duration && (
                <li>
                  <strong>Duration</strong>
                  <span>{course.duration}</span>
                </li>
              )}
              {course.schedule && (
                <li>
                  <strong>Schedule</strong>
                  <span>{course.schedule}</span>
                </li>
              )}
            </ul>
          </aside>
        </div>
      </section>

      {hasBenefits && (
        <ProgramBenefits
          eyebrow={benefitsWithIcons.eyebrow}
          title={benefitsWithIcons.title}
          items={benefitsWithIcons.items}
        />
      )}

      {hasRoadmap && (
        <CourseRoadmap
          eyebrow={course.roadmap.eyebrow}
          title={course.roadmap.title}
          subtitle={course.roadmap.subtitle}
          phases={course.roadmap.phases}
        />
      )}

      {hasCurriculum && (
        <CourseCurriculum
          eyebrow={course.curriculum.eyebrow}
          title={course.curriculum.title}
          subtitle={course.curriculum.subtitle}
          intro={course.curriculum.intro}
          modules={course.curriculum.modules}
        />
      )}
    </div>
  );
}
