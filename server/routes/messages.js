import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

// POST /api/messages - contact form submission
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, body } = req.body;
    if (!name || !email || !body) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }
    const message = await Message.create({ name, email, subject, body });
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/messages - list all (admin use)
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Could not load messages." });
  }
});

export default router;
