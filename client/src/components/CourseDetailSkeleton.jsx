import { Skeleton } from "@mui/material";

// Soft blue tint so it blends with your light-blue gradient background
const base = { bgcolor: "rgba(37, 99, 235, 0.08)" };

function Sk({ sx, ...rest }) {
  return <Skeleton animation="wave" sx={{ ...base, ...sx }} {...rest} />;
}

export default function CourseDetailSkeleton() {
  return (
    <div
      className="course-detail-page"
      role="status"
      aria-live="polite"
      aria-label="Loading course"
    >
      <section className="section-head-wrap container">
        <div className="course-detail-inner">
          {/* LEFT: title, tagline, stack chips, description */}
          <div className="course-detail-main">
            <Sk variant="text" width="75%" height={64} />
            <Sk variant="text" width="55%" height={30} />

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "18px 0" }}>
              {[90, 70, 100, 80].map((w, i) => (
                <Sk key={i} variant="rounded" width={w} height={34} sx={{ borderRadius: 999 }} />
              ))}
            </div>

            <Sk variant="text" width="100%" />
            <Sk variant="text" width="94%" />
            <Sk variant="text" width="60%" />
          </div>

          {/* RIGHT: seats, CTA, facts */}
          <aside className="course-detail-side">
            <Sk variant="rounded" width={120} height={28} sx={{ borderRadius: 999 }} />
            <Sk
              variant="rounded"
              width="100%"
              height={54}
              sx={{ borderRadius: 999, my: 2 }}
            />
            <Sk variant="text" width="80%" />
            <Sk variant="text" width="65%" />
          </aside>
        </div>

        {/* Benefits row */}
        <div
          style={{
            display: "grid",
            gap: 20,
            marginTop: 48,
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          {[0, 1, 2, 3].map((i) => (
            <Sk key={i} variant="rounded" height={130} sx={{ borderRadius: 3 }} />
          ))}
        </div>
      </section>
    </div>
  );
}