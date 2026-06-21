import { z } from "zod";

export const subscriptionPlanSchema = z.object({
  name: z.string().min(1).optional(),
  price: z.coerce.number().optional(),
  period: z.enum(["monthly", "yearly"]).optional(),
  features: z.array(z.string()).optional(),
  activeUsers: z.coerce.number().optional(),
  revenue: z.coerce.number().optional(),
  status: z.enum(["active", "inactive"]).optional(),
  color: z.string().optional(),
});
