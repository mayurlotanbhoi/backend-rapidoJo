import mongoose, { Schema } from "mongoose";

const purchaseSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    courseId: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true,
      index: true,
    },
    subscriptionId: {
      type: Schema.Types.ObjectId,
      ref: "SubscriptionPlan",
      default: null,
    },
    amount: {
      type: Number,
      default: 0,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed", "refunded"],
      default: "pending",
      index: true,
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
