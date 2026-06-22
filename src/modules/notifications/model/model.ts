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
    audience: { type: String, default: "all" },
    recipients: { type: Number, default: 0 },
    sentAt: { type: String, default: "" },
    isDeleted: { type: Boolean, default: false },
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true },
);

notificationSchema.pre(/^find/, function (this: any) {
  this.where({ isDeleted: false });
});

notificationSchema.pre("countDocuments", function (this: any) {
  this.where({ isDeleted: false });
});

export default mongoose.model("Notification", notificationSchema);
