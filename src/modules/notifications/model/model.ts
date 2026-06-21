import mongoose, { Schema } from "mongoose";

const notificationSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    message: { type: String, required: true },
    type: {
      type: String,
      enum: ["push", "email", "sms", "in-app"],
      default: "push",
    },
    status: {
      type: String,
      enum: ["sent", "failed", "scheduled", "draft"],
      default: "sent",
    },
    recipients: { type: Number, default: 0 },
    sentAt: { type: String, default: "" },
  },
  { timestamps: true },
);

export default mongoose.model("Notification", notificationSchema);
