import mongoose from "mongoose";
import { boolean } from "zod";

const jobSchema = new mongoose.Schema(
  {
    title: String,
    company: String,
    source: String,
    sourceUrl: String,
    location: String,
    salaryMin: Number,
    salaryMax: Number,
    expMin: Number,
    expMax: Number,
    skills: [String],

    description: String,

    requirements: [String],

    benefits: [String],
    isDeleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

export const JobModel = mongoose.model("Job", jobSchema);
