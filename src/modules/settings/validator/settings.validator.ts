import { z } from "zod";

export const settingsSchema = z.object({
  general: z
    .object({
      siteName: z.string().optional(),
      tagline: z.string().optional(),
      supportEmail: z.string().email().optional().or(z.literal("")),
    })
    .optional(),
  seo: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
      keywords: z.string().optional(),
    })
    .optional(),
  payment: z
    .object({
      gateway: z.string().optional(),
      currency: z.string().optional(),
      taxRate: z.string().optional(),
    })
    .optional(),
  smtp: z
    .object({
      host: z.string().optional(),
      port: z.string().optional(),
      username: z.string().optional(),
      password: z.string().optional(),
      useSsl: z.coerce.boolean().optional(),
    })
    .optional(),
});
