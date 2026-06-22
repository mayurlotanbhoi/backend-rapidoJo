"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const settingsSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
exports.default = mongoose_1.default.model("Setting", settingsSchema);
//# sourceMappingURL=model.js.map