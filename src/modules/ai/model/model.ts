import mongoose, { Schema } from "mongoose";

const aiSessionSchema = new Schema(
  {
    userName: { type: String, required: true, trim: true },
    type: {
      type: String,
      enum: ["resume_review", "ats_report", "career_advice", "job_match"],
      default: "resume_review",
    },
    creditsUsed: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["completed", "processing", "failed"],
      default: "completed",
    },
    score: { type: Number, default: undefined },
  },
  { timestamps: true },
);

const promptTemplateSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    type: { type: String, default: "" },
    template: { type: String, default: "" },
    variables: { type: [String], default: [] },
    usageCount: { type: Number, default: 0 },
    lastUsed: { type: String, default: "" },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
  },
  { timestamps: true },
);

export const AISessionModel = mongoose.model("AISession", aiSessionSchema);
export const PromptTemplateModel = mongoose.model("PromptTemplate", promptTemplateSchema);
