const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.error || "Something went wrong. Please try again.");
    err.status = res.status;
    throw err;
  }
  return data;
}

export const api = {
  getCourses: () => request("/courses"),
  getCourse: (slug) => request(`/courses/${slug}`),
  enroll: (payload) =>
    request("/enrollments", { method: "POST", body: JSON.stringify(payload) }),
  sendMessage: (payload) =>
    request("/messages", { method: "POST", body: JSON.stringify(payload) }),
};