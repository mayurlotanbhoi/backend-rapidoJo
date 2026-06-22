import { z } from "zod";

export const companySchema = z.object({
  name: z.string().min(1).optional(),
  logo: z.string().optional(),
  industry: z.string().optional(),
  size: z.string().optional(),
  description: z.string().optional(),
  openJobs: z.coerce.number().optional(),
  employees: z.string().optional(),
  status: z.enum(["approved", "pending", "rejected", "suspended"]).optional(),
  website: z.string().optional(),
  location: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
});
