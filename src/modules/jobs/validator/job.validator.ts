import { z } from "zod";

export const createJobSchema = z.object({
     title: z.string().min(3),

     company: z.string().min(2),

     source: z.string(),

     sourceUrl: z.string().url(),

     location: z.string(),

     salaryMin: z.number().optional(),

     salaryMax: z.number().optional(),

     expMin: z.number().optional(),

     expMax: z.number().optional(),

     skills: z.array(z.string()),

     description: z.string(),

     requirements: z.array(z.string()),

     benefits: z.array(z.string()),
});