import { z } from "zod";

export const purchaseSchema = z.object({
  userId: z.string().min(1).optional().nullable(),
  courseId: z.string().min(1).optional().nullable(),
  subscriptionId: z.string().min(1).optional().nullable(),
  applicantName: z.string().trim().optional(),
  applicantEmail: z.string().email().optional().or(z.literal("")),
  courseName: z.string().trim().optional(),
  paymentId: z.string().trim().optional(),
  utr: z.string().trim().optional(),
  screenshot: z.string().optional(),
  amount: z.coerce.number().optional(),
  paymentStatus: z.enum(["pending", "submitted", "approved", "rejected", "paid", "failed", "refunded"]).optional(),
  enrollmentStatus: z.enum(["pending", "approved", "rejected"]).optional(),
  rejectionReason: z.string().optional(),
  transactionId: z.string().optional(),
  purchasedAt: z.coerce.date().optional(),
});
