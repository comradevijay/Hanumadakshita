import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { api } from "../api/client";

export default function Enroll() {
  const [searchParams] = useSearchParams();
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "", courseId: "", message: "" });
  const [state, setState] = useState("idle");
  const [error, setError] = useState("");
  const [seatsLeft, setSeatsLeft] = useState(null);

  useEffect(() => {
    api.getCourses().then((data) => {
      setCourses(data);
      const preselect = searchParams.get("course");
      const match = data.find((c) => c.slug === preselect);
      if (match) setForm((f) => ({ ...f, courseId: match._id }));
      else if (data[0]) setForm((f) => ({ ...f, courseId: data[0]._id }));
    });
  }, [searchParams]);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setState("submitting");
    setError("");
    try {
      const result = await api.enroll(form);
      setSeatsLeft(result.seatsLeft);
      setState("done");
    } catch (err) {
      setError(err.message);
      setState("idle");
    }
  };

  return (
    <section className="form-page">
      <div className="container form-page-inner">
        <div className="form-page-copy">
          <span className="eyebrow">Reserve a seat</span>
          <h1>Book your spot in the next evening batch</h1>
          <p>
            Seats are limited per batch. Submit your details and we'll
            confirm your slot by phone or email within a day.
          </p>
        </div>

        <div className="form-page-card">
          {state === "done" ? (
            <div className="form-success">
              <h3>You're on the list</h3>
              <p>
                We've reserved your seat request.{" "}
                {seatsLeft !== null && seatsLeft >= 0
                  ? `${seatsLeft} seat${seatsLeft === 1 ? "" : "s"} left in this batch.`
                  : ""}{" "}
                We'll contact you shortly to confirm.
              </p>
            </div>
          ) : (
            <form onSubmit={submit}>
              <label>
                Full name
                <input required value={form.name} onChange={update("name")} placeholder="Your name" />
              </label>
              <label>
                Email
                <input required type="email" value={form.email} onChange={update("email")} placeholder="you@example.com" />
              </label>
              <label>
                Phone
                <input required value={form.phone} onChange={update("phone")} placeholder="10-digit mobile number" />
              </label>
              <label>
                Course
                <select required value={form.courseId} onChange={update("courseId")}>
                  {courses.map((c) => {
                    const left = c.seatsTotal - c.seatsFilled;
                    return (
                      <option key={c._id} value={c._id} disabled={left <= 0}>
                        {c.title} — {left > 0 ? `${left} seats left` : "Full"}
                      </option>
                    );
                  })}
                </select>
              </label>
              <label>
                Anything we should know? (optional)
                <textarea rows={4} value={form.message} onChange={update("message")} placeholder="Prior experience, preferred batch, questions…" />
              </label>
              {error && <p className="form-error">{error}</p>}
              <button className="btn btn-primary" type="submit" disabled={state === "submitting"}>
                {state === "submitting" ? "Reserving…" : "Reserve my seat"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
