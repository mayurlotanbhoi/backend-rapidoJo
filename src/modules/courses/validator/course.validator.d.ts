import { z } from "zod";
export declare const createCourseSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodString>;
    instructorName: z.ZodOptional<z.ZodString>;
    thumbnail: z.ZodOptional<z.ZodAny>;
    level: z.ZodOptional<z.ZodEnum<{
        Beginner: "Beginner";
        Intermediate: "Intermediate";
        Advanced: "Advanced";
    }>>;
    badge: z.ZodOptional<z.ZodString>;
    googleDriveFolderId: z.ZodOptional<z.ZodString>;
    discount: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    totalEnrollments: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    totalDuration: z.ZodOptional<z.ZodString>;
    rating: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    originalPrice: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    discountAmount: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    finalAmount: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    totalRevenue: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    status: z.ZodOptional<z.ZodEnum<{
        inactive: "inactive";
        draft: "draft";
        published: "published";
        archived: "archived";
    }>>;
    isPublished: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
}, z.core.$strip>;
//# sourceMappingURL=course.validator.d.ts.map