import mongoose, { Schema } from "mongoose";

const settingsSchema = new Schema(
  {
    key: { type: String, unique: true, default: "admin" },
    siteName: { type: String, default: "Rapido Jobs" },
    supportEmail: { type: String, default: "support@rapidojobs.com" },
    logo: { type: String, default: "" },
    favicon: { type: String, default: "" },
    maintenanceMode: { type: Boolean, default: false },
    general: {
      siteName: { type: String, default: "Rapido Jobs" },
      tagline: { type: String, default: "Find Your Dream Job" },
      supportEmail: { type: String, default: "support@rapidojobs.com" },
    },
    seo: {
      title: { type: String, default: "Rapido Jobs" },
      description: { type: String, default: "India's fastest job platform" },
      keywords: { type: String, default: "jobs, careers" },
    },
    payment: {
      gateway: { type: String, default: "Razorpay" },
      currency: { type: String, default: "INR" },
      taxRate: { type: String, default: "18" },
    },
    smtp: {
      host: { type: String, default: "smtp.gmail.com" },
      port: { type: String, default: "587" },
      username: { type: String, default: "noreply@rapidojobs.com" },
      password: { type: String, default: "" },
      useSsl: { type: Boolean, default: true },
    },
  },
  { timestamps: true },
);

export default mongoose.model("Setting", settingsSchema);
