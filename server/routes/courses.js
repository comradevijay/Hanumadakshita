import express from "express";
import Course from "../models/Course.js";

const router = express.Router();

// GET /api/courses — list all active courses (for the Courses page /
// nav dropdown)
router.get("/", async (req, res, next) => {
  try {
    const courses = await Course.find({ active: true }).sort({ title: 1 });
    res.json(courses);
  } catch (err) {
    next(err);
  }
});

// GET /api/courses/:slug — single course by slug (for CourseDetail
// page). Kept below GET "/" so "/" still matches the list route.
router.get("/:slug", async (req, res, next) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug, active: true });
    if (!course) {
      return res.status(404).json({ error: "Course not found." });
    }
    res.json(course);
  } catch (err) {
    next(err);
  }
});

export default router;