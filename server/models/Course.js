import mongoose from "mongoose";

const benefitItemSchema = new mongoose.Schema(
  {
    icon: { type: String, required: true }, // key into the client's icon lookup, e.g. "check", "mentor", "briefcase", "star"
    title: { type: String, required: true },
    desc: { type: String, required: true },
  },
  { _id: false }
);

const roadmapPhaseSchema = new mongoose.Schema(
  {
    day: { type: String, required: true }, // e.g. "Day 0 · Kickoff"
    phase: { type: String, required: true }, // e.g. "01"
    title: { type: String, required: true },
    desc: { type: String, required: true },
  },
  { _id: false }
);

const curriculumIntroItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
  },
  { _id: false }
);

const curriculumModuleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, // e.g. "Python"
    topicsCount: { type: Number, default: 4 }, // shown as "4 topics"
    points: [{ type: String }], // bullet list shown when the module is expanded
  },
  { _id: false }
);

const courseSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    tagline: { type: String, required: true },
    description: { type: String, required: true },
    stack: [{ type: String }],
    duration: { type: String, required: true },
    schedule: { type: String, default: "Mon–Fri, Evening" },
    seatsTotal: { type: Number, default: 20 },
    seatsFilled: { type: Number, default: 0 },
    active: { type: Boolean, default: true },

    // Course detail page content — optional so existing courses
    // without this data still work; CourseDetail.jsx should handle
    // benefits/roadmap/curriculum being absent.
    benefits: {
      eyebrow: { type: String, default: "Program Benefits" },
      title: { type: String, default: "Why choose this program?" },
      items: [benefitItemSchema],
    },
    roadmap: {
      eyebrow: { type: String, default: "Course Roadmap" },
      title: { type: String },
      subtitle: { type: String },
      phases: [roadmapPhaseSchema],
    },
    curriculum: {
      eyebrow: { type: String, default: "Detailed Curriculum" },
      title: { type: String },
      subtitle: { type: String },
      intro: [curriculumIntroItemSchema],
      modules: [curriculumModuleSchema],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);