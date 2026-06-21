import { z } from "zod";

export const applicationSchema = z.object({
  candidateName: z.string().min(1).optional(),
  candidateEmail: z.string().email().optional().or(z.literal("")),
  jobTitle: z.string().optional(),
  company: z.string().optional(),
  appliedDate: z.string().optional(),
  status: z.enum(["applied", "screening", "interview", "selected", "rejected"]).optional(),
  resumeUrl: z.string().optional(),
  matchScore: z.coerce.number().min(0).max(100).optional(),
});
