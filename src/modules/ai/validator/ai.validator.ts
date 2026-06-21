import { z } from "zod";

export const aiSessionSchema = z.object({
  userName: z.string().min(1).optional(),
  type: z.enum(["resume_review", "ats_report", "career_advice", "job_match"]).optional(),
  creditsUsed: z.coerce.number().optional(),
  status: z.enum(["completed", "processing", "failed"]).optional(),
  score: z.coerce.number().min(0).max(100).optional(),
});

export const promptTemplateSchema = z.object({
  name: z.string().min(1).optional(),
  type: z.string().optional(),
  template: z.string().optional(),
  variables: z.array(z.string()).optional(),
  usageCount: z.coerce.number().optional(),
  lastUsed: z.string().optional(),
  status: z.enum(["active", "inactive"]).optional(),
});
