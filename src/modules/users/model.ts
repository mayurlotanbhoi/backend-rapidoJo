import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    mobile: {
      type: String,
      default: "",
    },
    subscription: {
      type: String,
      enum: ["free", "basic", "premium", "enterprise"],
      default: "free",
    },
    applications: {
      type: Number,
      default: 0,
    },
    resumeUploaded: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["active", "suspended", "inactive"],
      default: "active",
    },
    location: {
      type: String,
      default: "",
    },
    skills: {
      type: [String],
      default: [],
    },
    lastLogin: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["JOB_SEEKER", "RECRUITER", "ADMIN"],
      default: "JOB_SEEKER",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("User", userSchema);
