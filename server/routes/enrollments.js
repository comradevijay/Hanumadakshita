import express from "express";
import Enrollment from "../models/Enrollment.js";
import Course from "../models/Course.js";

const router = express.Router();

// POST /api/enrollments - create a new enrollment (seat request)
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, courseId, message } = req.body;

    if (!name || !email || !phone || !courseId) {
      return res.status(400).json({ error: "Name, email, phone, and course are required." });
    }

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ error: "Selected course does not exist." });

    if (course.seatsFilled >= course.seatsTotal) {
      return res.status(409).json({ error: "This batch is full. Please check other batches." });
    }

    const enrollment = await Enrollment.create({
      name,
      email,
      phone,
      course: courseId,
      message,
    });

    course.seatsFilled += 1;
    await course.save();

    res.status(201).json({
      enrollment,
      seatsLeft: course.seatsTotal - course.seatsFilled,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/enrollments - list all (admin use)
router.get("/", async (req, res) => {
  try {
    const enrollments = await Enrollment.find().populate("course").sort({ createdAt: -1 });
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ error: "Could not load enrollments." });
  }
});

// PATCH /api/enrollments/:id - update status (admin use)
router.patch("/:id", async (req, res) => {
  try {
    const enrollment = await Enrollment.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true, runValidators: true }
    );
    if (!enrollment) return res.status(404).json({ error: "Enrollment not found." });
    res.json(enrollment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
