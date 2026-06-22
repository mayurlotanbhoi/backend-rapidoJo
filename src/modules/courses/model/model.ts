import mongoose, { Schema, Document } from "mongoose";

export interface ICourse extends Document {
  title: string;

  subtitle: string;

  instructorName: string;

  thumbnail: string;

  level: "Beginner" | "Intermediate" | "Advanced";

  badge?: string;

  googleDriveFolderId: string;

  status?: "published" | "draft" | "archived" | "inactive";

  discount?: number;

  totalRevenue?: number;

  totalEnrollments: number;

  totalDuration: string;

  rating: number;

  originalPrice: number;

  discountAmount: number;

  finalAmount: number;

  isPublished: boolean;

  isDeleted?: boolean;
  deletedAt?: Date | null;

  createdAt: Date;
  updatedAt: Date;
}

const CourseSchema = new Schema<ICourse>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    subtitle: {
      type: String,
      required: true,
    },

    instructorName: {
      type: String,
      required: true,
    },

    thumbnail: {
      type: String,
      required: true,
    },

    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },

    badge: {
      type: String,
      default: "",
    },

    googleDriveFolderId: {
      type: String,
      required: true,
    },

    totalEnrollments: {
      type: Number,
      default: 0,
    },

    totalDuration: {
      type: String,
      default: "0h 0m",
    },

    rating: {
      type: Number,
      default: 0,
    },

    originalPrice: {
      type: Number,
      required: true,
      default: 0,
    },

    discountAmount: {
      type: Number,
      default: 0,
    },

    finalAmount: {
      type: Number,
      required: true,
      default: 0,
    },

    discount: {
      type: Number,
      default: 0,
    },

    totalRevenue: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["published", "draft", "archived", "inactive"],
      default: "draft",
      index: true,
    },

    isPublished: {
      type: Boolean,
      default: false,
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

CourseSchema.pre(/^find/, function (this: any) {
  this.where({ isDeleted: false });
});

CourseSchema.pre("countDocuments", function (this: any) {
  this.where({ isDeleted: false });
});

export default mongoose.model<ICourse>("Course", CourseSchema);
