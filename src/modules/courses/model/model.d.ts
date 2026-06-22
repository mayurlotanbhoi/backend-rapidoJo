import mongoose, { Document } from "mongoose";
export interface ICourse extends Document {
    title: string;
    subtitle: string;
    instructorName: string;
    thumbnail: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    badge?: string;
    googleDriveFolderId: string;
    status?: "published" | "draft" | "archived" | "inactive";
    discount?: number;
    totalRevenue?: number;
    totalEnrollments: number;
    totalDuration: string;
    rating: number;
    originalPrice: number;
    discountAmount: number;
    finalAmount: number;
    isPublished: boolean;
    isDeleted?: boolean;
    deletedAt?: Date | null;
    createdAt: Date;
    updatedAt: Date;
}
declare const _default: mongoose.Model<ICourse, {}, {}, {}, mongoose.Document<unknown, {}, ICourse, {}, mongoose.DefaultSchemaOptions> & ICourse & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, ICourse>;
export default _default;
//# sourceMappingURL=model.d.ts.map