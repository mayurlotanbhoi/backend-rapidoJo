import { z } from "zod";

export const createCourseValidator = z.object({
  title: z.string().min(3),

  description: z.string().min(10),

  thumbnail: z.string().optional(),

  price: z.number(),

  googleDriveFolderId: z.string(),

  videos: z.array(
    z.object({
      title: z.string(),
      driveFileId: z.string(),
    }),
  ),

  isPublished: z.boolean().optional(),
});
