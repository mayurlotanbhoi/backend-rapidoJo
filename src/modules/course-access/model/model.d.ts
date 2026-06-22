import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    isDeleted: boolean;
    email: string;
    courseId: mongoose.Types.ObjectId;
    driveFolderId: string;
    accessStatus: "pending" | "failed" | "granted" | "revoked";
    deletedAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    isDeleted: boolean;
    email: string;
    courseId: mongoose.Types.ObjectId;
    driveFolderId: string;
    accessStatus: "pending" | "failed" | "granted" | "revoked";
    deletedAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    isDeleted: boolean;
    email: string;
    courseId: mongoose.Types.ObjectId;
    driveFolderId: string;
    accessStatus: "pending" | "failed" | "granted" | "revoked";
    deletedAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    isDeleted: boolean;
    email: string;
    courseId: mongoose.Types.ObjectId;
    driveFolderId: string;
    accessStatus: "pending" | "failed" | "granted" | "revoked";
    deletedAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    isDeleted: boolean;
    email: string;
    courseId: mongoose.Types.ObjectId;
    driveFolderId: string;
    accessStatus: "pending" | "failed" | "granted" | "revoked";
    deletedAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    isDeleted: boolean;
    email: string;
    courseId: mongoose.Types.ObjectId;
    driveFolderId: string;
    accessStatus: "pending" | "failed" | "granted" | "revoked";
    deletedAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    isDeleted: boolean;
    email: string;
    courseId: mongoose.Types.ObjectId;
    driveFolderId: string;
    accessStatus: "pending" | "failed" | "granted" | "revoked";
    deletedAt?: NativeDate | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    isDeleted: boolean;
    email: string;
    courseId: mongoose.Types.ObjectId;
    driveFolderId: string;
    accessStatus: "pending" | "failed" | "granted" | "revoked";
    deletedAt?: NativeDate | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=model.d.ts.map