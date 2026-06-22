import { z } from "zod";

export const userSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  profileImage: z.string().optional(),
  mobile: z.string().optional(),
  subscription: z.enum(["free", "basic", "premium", "lifetime"]).optional(),
  applications: z.coerce.number().optional(),
  resumeUploaded: z.coerce.boolean().optional(),
  status: z.enum(["active", "suspended", "inactive"]).optional(),
  location: z.string().optional(),
  skills: z.array(z.string()).optional(),
  lastLogin: z.string().optional(),
  role: z.enum(["SUPER_ADMIN", "ADMIN", "USER"]).optional(),
});
