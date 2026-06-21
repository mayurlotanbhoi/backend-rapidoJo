import { SettingsDto } from "../dto/settings.dto";
import SettingsModel from "../model/model";

const defaults = {
  general: {
    siteName: "Rapido Jobs",
    tagline: "Find Your Dream Job",
    supportEmail: "support@rapidojobs.com",
  },
  seo: {
    title: "Rapido Jobs",
    description: "India's fastest job platform",
    keywords: "jobs, careers",
  },
  payment: {
    gateway: "Razorpay",
    currency: "INR",
    taxRate: "18",
  },
  smtp: {
    host: "smtp.gmail.com",
    port: "587",
    username: "noreply@rapidojobs.com",
    password: "",
    useSsl: true,
  },
};

export class SettingsRepository {
  async get() {
    const settings = await SettingsModel.findOne({ key: "admin" }).lean();
    return settings || defaults;
  }

  async update(payload: SettingsDto) {
    return SettingsModel.findOneAndUpdate(
      { key: "admin" },
      { $set: payload },
      { new: true, upsert: true, setDefaultsOnInsert: true },
    ).lean();
  }
}
