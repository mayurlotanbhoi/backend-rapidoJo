"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsRepository = void 0;
const model_1 = __importDefault(require("../model/model"));
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
class SettingsRepository {
    async get() {
        const settings = await model_1.default.findOne({ key: "admin" }).lean();
        return settings || defaults;
    }
    async update(payload) {
        return model_1.default.findOneAndUpdate({ key: "admin" }, { $set: payload }, { new: true, upsert: true, setDefaultsOnInsert: true }).lean();
    }
}
exports.SettingsRepository = SettingsRepository;
//# sourceMappingURL=settings.repository.js.map