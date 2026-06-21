import { z } from "zod";

export const notificationSchema = z.object({
  title: z.string().min(1).optional(),
  message: z.string().min(1).optional(),
  type: z.enum(["push", "email", "sms", "in-app"]).optional(),
  status: z.enum(["sent", "failed", "scheduled", "draft"]).optional(),
  recipients: z.coerce.number().optional(),
  sentAt: z.string().optional(),
});
