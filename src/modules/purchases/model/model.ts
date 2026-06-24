import mongoose, { Schema } from "mongoose";

const purchaseSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
      index: true,
    },
    courseId: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      default: null,
      index: true,
    },
    subscriptionId: {
      type: Schema.Types.ObjectId,
      ref: "SubscriptionPlan",
      default: null,
    },
    applicantName: {
      type: String,
      default: "",
      trim: true,
      index: true,
    },
    applicantEmail: {
      type: String,
      default: "",
      lowercase: true,
      trim: true,
      index: true,
    },
    courseName: {
      type: String,
      default: "",
      trim: true,
      index: true,
    },
    paymentId: {
      type: String,
      default: "",
      trim: true,
      index: true,
    },
    utr: {
      type: String,
      default: "",
      trim: true,
      index: true,
    },
    screenshot: {
      type: String,
      default: "",
    },
    amount: {
      type: Number,
      default: 0,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "submitted", "approved", "rejected", "paid", "failed", "refunded"],
      default: "pending",
      index: true,
    },
    enrollmentStatus: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
      index: true,
    },
    rejectionReason: {
      type: String,
      default: "",
    },
    verifiedAt: {
      type: Date,
      default: null,
    },
    verifiedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    transactionId: {
      type: String,
      default: "",
      index: true,
    },
    purchasedAt: {
      type: Date,
      default: Date.now,
      index: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true },
);

purchaseSchema.pre(/^find/, function (this: any) {
  this.where({ isDeleted: false });
});

purchaseSchema.pre("countDocuments", function (this: any) {
  this.where({ isDeleted: false });
});

export default mongoose.model("Purchase", purchaseSchema);
