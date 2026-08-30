import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    message: { type: String, trim: true },
    status: {
      type: String,
      enum: ["new", "contacted", "confirmed", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Enrollment", enrollmentSchema);
