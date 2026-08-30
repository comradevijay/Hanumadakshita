import { useState } from "react";
import { api } from "../api/client";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", body: "" });
  const [state, setState] = useState("idle");
  const [error, setError] = useState("");

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setState("submitting");
    setError("");
    try {
      await api.sendMessage(form);
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
          <span className="eyebrow">Contact</span>
          <h1>Ask us anything before you enroll</h1>
          <p>
            Questions about a track, timing, or fees — reach out and we'll
            get back to you by email or phone.
          </p>
          <div className="form-page-details">
            <div>
              <span>Phone</span>
              <a href="tel:+919573832026">+91 95738 32026</a>
            </div>
            <div>
              <span>Email</span>
              <a href="mailto:charankaramala49@gmail.com">charankaramala49@gmail.com</a>
            </div>
            <div>
              <span>Office</span>
              <p>No. 16/497, Lachhareddy Street, Madanapalle, Chittoor, AP 517325</p>
            </div>
          </div>
        </div>

        <div className="form-page-card">
          {state === "done" ? (
            <div className="form-success">
              <h3>Message sent</h3>
              <p>Thanks for reaching out — we'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={submit}>
              <label>
                Name
                <input required value={form.name} onChange={update("name")} placeholder="Your name" />
              </label>
              <label>
                Email
                <input required type="email" value={form.email} onChange={update("email")} placeholder="you@example.com" />
              </label>
              <label>
                Subject
                <input value={form.subject} onChange={update("subject")} placeholder="What's this about?" />
              </label>
              <label>
                Message
                <textarea required rows={5} value={form.body} onChange={update("body")} placeholder="Tell us what you'd like to know" />
              </label>
              {error && <p className="form-error">{error}</p>}
              <button className="btn btn-primary" type="submit" disabled={state === "submitting"}>
                {state === "submitting" ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
