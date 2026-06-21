import { z } from "zod";

export const userSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  mobile: z.string().optional(),
  subscription: z.enum(["free", "basic", "premium", "enterprise"]).optional(),
  applications: z.coerce.number().optional(),
  resumeUploaded: z.coerce.boolean().optional(),
  status: z.enum(["active", "suspended", "inactive"]).optional(),
  location: z.string().optional(),
  skills: z.array(z.string()).optional(),
  lastLogin: z.string().optional(),
  role: z.enum(["JOB_SEEKER", "RECRUITER", "ADMIN"]).optional(),
});
