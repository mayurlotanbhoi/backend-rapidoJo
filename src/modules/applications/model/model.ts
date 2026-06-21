import mongoose, { Schema } from "mongoose";

const applicationSchema = new Schema(
  {
    candidateName: { type: String, required: true, trim: true },
    candidateEmail: { type: String, default: "" },
    jobTitle: { type: String, default: "" },
    company: { type: String, default: "" },
    appliedDate: { type: String, default: "" },
    status: {
      type: String,
      enum: ["applied", "screening", "interview", "selected", "rejected"],
      default: "applied",
    },
    resumeUrl: { type: String, default: "" },
    matchScore: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export default mongoose.model("Application", applicationSchema);
