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
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        default: "",
        trim: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        index: true,
    },
    profileImage: {
        type: String,
        default: "",
    },
    googleId: {
        type: String,
        default: "",
        index: true,
    },
    password: {
        type: String,
        default: "",
    },
    mobile: {
        type: String,
        default: "",
    },
    subscription: {
        type: String,
        enum: ["free", "basic", "premium", "lifetime"],
        default: "free",
        index: true,
    },
    applications: {
        type: Number,
        default: 0,
    },
    resumeUploaded: {
        type: Boolean,
        default: false,
    },
    status: {
        type: String,
        enum: ["active", "suspended", "inactive"],
        default: "active",
        index: true,
    },
    location: {
        type: String,
        default: "",
    },
    skills: {
        type: [String],
        default: [],
    },
    lastLogin: {
        type: Date,
        default: null,
    },
    role: {
        type: String,
        enum: ["SUPER_ADMIN", "ADMIN", "USER"],
        default: "USER",
        index: true,
    },
    refreshToken: {
        type: String,
        default: "",
    },
    isDeleted: {
        type: Boolean,
        default: false,
        index: true,
    },
    deletedAt: {
        type: Date,
        default: null,
    },
}, {
    timestamps: true,
});
userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ role: 1, status: 1 });
userSchema.pre(/^find/, function () {
    this.where({ isDeleted: false });
});
userSchema.pre("countDocuments", function () {
    this.where({ isDeleted: false });
});
exports.default = mongoose_1.default.model("User", userSchema);
//# sourceMappingURL=model.js.map