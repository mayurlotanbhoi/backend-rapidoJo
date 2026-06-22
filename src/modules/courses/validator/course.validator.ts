import { z } from "zod";

export const createCourseSchema = z.object({
  title: z.string().min(1).optional(),

  subtitle: z.string().optional(),

  instructorName: z.string().optional(),

  thumbnail: z.any().optional(),

  level: z.enum(["Beginner", "Intermediate", "Advanced"]).optional(),

  badge: z.string().optional(),

  googleDriveFolderId: z.string().optional(),

  discount: z.coerce.number().optional(),

  totalEnrollments: z.coerce.number().optional(),

  totalDuration: z.string().optional(),

  rating: z.coerce.number().optional(),

  originalPrice: z.coerce.number().optional(),

  discountAmount: z.coerce.number().optional(),

  finalAmount: z.coerce.number().optional(),

  totalRevenue: z.coerce.number().optional(),

  status: z.enum(["published", "draft", "archived", "inactive"]).optional(),

  isPublished: z.coerce.boolean().optional(),
});
