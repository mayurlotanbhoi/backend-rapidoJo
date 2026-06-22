import { z } from "zod";

export const subscriptionPlanSchema = z.object({
  name: z.string().min(1).optional(),
  price: z.coerce.number().optional(),
  duration: z.string().optional(),
  period: z.enum(["monthly", "yearly", "lifetime"]).optional(),
  features: z.array(z.string()).optional(),
  activeUsers: z.coerce.number().optional(),
  revenue: z.coerce.number().optional(),
  active: z.coerce.boolean().optional(),
  status: z.enum(["active", "inactive"]).optional(),
  color: z.string().optional(),
});
