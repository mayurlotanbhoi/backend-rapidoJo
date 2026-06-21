import mongoose, { Schema } from "mongoose";

const companySchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    industry: { type: String, default: "" },
    openJobs: { type: Number, default: 0 },
    employees: { type: String, default: "" },
    status: {
      type: String,
      enum: ["approved", "pending", "rejected", "suspended"],
      default: "pending",
    },
    website: { type: String, default: "" },
    location: { type: String, default: "" },
    email: { type: String, default: "" },
  },
  { timestamps: true },
);

export default mongoose.model("Company", companySchema);
