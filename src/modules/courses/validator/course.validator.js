"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourseSchema = void 0;
const zod_1 = require("zod");
exports.createCourseSchema = zod_1.z.object({
    title: zod_1.z.string().min(1).optional(),
    subtitle: zod_1.z.string().optional(),
    instructorName: zod_1.z.string().optional(),
    thumbnail: zod_1.z.any().optional(),
    level: zod_1.z.enum(["Beginner", "Intermediate", "Advanced"]).optional(),
    badge: zod_1.z.string().optional(),
    googleDriveFolderId: zod_1.z.string().optional(),
    discount: zod_1.z.coerce.number().optional(),
    totalEnrollments: zod_1.z.coerce.number().optional(),
    totalDuration: zod_1.z.string().optional(),
    rating: zod_1.z.coerce.number().optional(),
    originalPrice: zod_1.z.coerce.number().optional(),
    discountAmount: zod_1.z.coerce.number().optional(),
    finalAmount: zod_1.z.coerce.number().optional(),
    totalRevenue: zod_1.z.coerce.number().optional(),
    status: zod_1.z.enum(["published", "draft", "archived", "inactive"]).optional(),
    isPublished: zod_1.z.coerce.boolean().optional(),
});
//# sourceMappingURL=course.validator.js.map