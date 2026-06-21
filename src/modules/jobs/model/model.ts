import mongoose, { Query } from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "",
    },

    company: {
      type: String,
      default: "",
    },

    source: {
      type: String,
      default: "",
    },

    sourceUrl: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },

    salaryMin: {
      type: Number,
      default: 0,
    },

    salaryMax: {
      type: Number,
      default: 0,
    },

    expMin: {
      type: Number,
      default: 0,
    },

    expMax: {
      type: Number,
      default: 0,
    },

    skills: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    requirements: {
      type: String,
      default: "",
    },

    benefits: {
      type: String,
      default: "",
    },

    companyEmail: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["active", "inactive", "expired", "draft"],
      default: "active",
    },

    applications: {
      type: Number,
      default: 0,
    },

    remote: {
      type: Boolean,
      default: false,
    },

    hybrid: {
      type: Boolean,
      default: false,
    },

    isPremium: {
      type: Boolean,
      default: false,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    isUrgent: {
      type: Boolean,
      default: false,
    },

    isSponsored: {
      type: Boolean,
      default: false,
    },

    type: {
      type: String,
      default: "Full-time",
    },

    postPhoto: {
      type: String,
      default: "",
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
  {
    timestamps: true,
  },
);

const excludeDeleted = function (this: any, next: any) {
  this.where({
    isDeleted: false,
  });

  // next();
};

// handles:
// find
// findOne
// findById
// findOneAndUpdate
// findOneAndDelete
// findOneAndRemove
jobSchema.pre(/^find/, excludeDeleted);

// handles countDocuments separately
jobSchema.pre("countDocuments", excludeDeleted);

export const JobModel = mongoose.model("Job", jobSchema);
