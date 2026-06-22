import mongoose, { Schema } from "mongoose";

const companySchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    logo: { type: String, default: "" },
    industry: { type: String, default: "" },
    size: { type: String, default: "" },
    description: { type: String, default: "" },
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
    isDeleted: { type: Boolean, default: false },
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true },
);

companySchema.pre(/^find/, function (this: any) {
  this.where({ isDeleted: false });
});

companySchema.pre("countDocuments", function (this: any) {
  this.where({ isDeleted: false });
});

export default mongoose.model("Company", companySchema);
