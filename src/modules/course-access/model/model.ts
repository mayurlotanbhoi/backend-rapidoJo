import mongoose, { Schema } from "mongoose";

const courseAccessSchema = new Schema(
  {
    email: { type: String, required: true, lowercase: true, trim: true, index: true },
    courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true, index: true },
    driveFolderId: { type: String, required: true, index: true },
    accessStatus: {
      type: String,
      enum: ["pending", "granted", "revoked", "failed"],
      default: "pending",
      index: true,
    },
    isDeleted: { type: Boolean, default: false },
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true },
);

courseAccessSchema.pre(/^find/, function (this: any, next: any) {
  this.where({ isDeleted: false });
  next();
});

courseAccessSchema.pre("countDocuments", function (this: any, next: any) {
  this.where({ isDeleted: false });
  next();
});

export default mongoose.model("CourseAccess", courseAccessSchema);
