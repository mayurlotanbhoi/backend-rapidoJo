import { z } from "zod";

export const purchaseSchema = z.object({
  userId: z.string().min(1).optional(),
  courseId: z.string().min(1).optional(),
  subscriptionId: z.string().min(1).optional(),
  amount: z.coerce.number().optional(),
  paymentStatus: z.enum(["pending", "paid", "failed", "refunded"]).optional(),
  transactionId: z.string().optional(),
  purchasedAt: z.coerce.date().optional(),
});
