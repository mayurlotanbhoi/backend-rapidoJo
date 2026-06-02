import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
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
