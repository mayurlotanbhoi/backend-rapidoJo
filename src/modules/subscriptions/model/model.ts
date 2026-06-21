import mongoose, { Schema } from "mongoose";

const subscriptionPlanSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, default: 0 },
    period: { type: String, enum: ["monthly", "yearly"], default: "monthly" },
    features: { type: [String], default: [] },
    activeUsers: { type: Number, default: 0 },
    revenue: { type: Number, default: 0 },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    color: { type: String, default: "#6B7280" },
  },
  { timestamps: true },
);

export default mongoose.model("SubscriptionPlan", subscriptionPlanSchema);
