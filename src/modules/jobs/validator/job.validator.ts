import { z } from "zod";

export const createJobsSchema = z
  .object({
    title: z.string().optional(),

    company: z.string().optional(),

    companyEmail: z.string().email("Invalid email").optional(),

    source: z.string().optional(),

    sourceUrl: z.string().url("Invalid URL").optional(),

    location: z.string().optional(),

    salaryMin: z.coerce.number().optional(),

    salaryMax: z.coerce.number().optional(),

    expMin: z.coerce.number().optional(),

    expMax: z.coerce.number().optional(),

    skills: z.string().optional(),

    description: z.string().optional(),

    requirements: z.string().optional(),

    benefits: z.string().optional(),

    postPhoto: z.any().optional(),

    status: z.enum(["active", "inactive", "expired", "draft"]).optional(),

    applications: z.coerce.number().optional(),

    remote: z.coerce.boolean().optional(),

    hybrid: z.coerce.boolean().optional(),

    isPremium: z.coerce.boolean().optional(),

    isFeatured: z.coerce.boolean().optional(),

    isUrgent: z.coerce.boolean().optional(),

    isSponsored: z.coerce.boolean().optional(),

    type: z.string().optional(),

    isDeleted: z.coerce.boolean().optional(),
  })
  .refine(
    (data) =>
      data.salaryMin === undefined ||
      data.salaryMax === undefined ||
      data.salaryMax >= data.salaryMin,
    {
      message: "Max salary must be greater than min salary",
      path: ["salaryMax"],
    },
  )
  .refine(
    (data) =>
      data.expMin === undefined ||
      data.expMax === undefined ||
      data.expMax >= data.expMin,
    {
      message: "Max experience must be greater than min experience",
      path: ["expMax"],
    },
  );
