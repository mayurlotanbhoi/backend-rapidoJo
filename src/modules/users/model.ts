import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
  },
);

userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ role: 1, status: 1 });

userSchema.pre(/^find/, function (this: any) {
  this.where({ isDeleted: false });
});

userSchema.pre("countDocuments", function (this: any) {
  this.where({ isDeleted: false });
});

export default mongoose.model("User", userSchema);
