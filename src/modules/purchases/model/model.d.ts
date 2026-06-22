import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    isDeleted: boolean;
    userId: mongoose.Types.ObjectId;
    courseId: mongoose.Types.ObjectId;
    amount: number;
    paymentStatus: "pending" | "failed" | "paid" | "refunded";
    transactionId: string;
    purchasedAt: NativeDate;
    deletedAt?: NativeDate | null;
    subscriptionId?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    isDeleted: boolean;
    userId: mongoose.Types.ObjectId;
    courseId: mongoose.Types.ObjectId;
    amount: number;
    paymentStatus: "pending" | "failed" | "paid" | "refunded";
    transactionId: string;
    purchasedAt: NativeDate;
    deletedAt?: NativeDate | null;
    subscriptionId?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    isDeleted: boolean;
    userId: mongoose.Types.ObjectId;
    courseId: mongoose.Types.ObjectId;
    amount: number;
    paymentStatus: "pending" | "failed" | "paid" | "refunded";
    transactionId: string;
    purchasedAt: NativeDate;
    deletedAt?: NativeDate | null;
    subscriptionId?: mongoose.Types.ObjectId | null;
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
    userId: mongoose.Types.ObjectId;
    courseId: mongoose.Types.ObjectId;
    amount: number;
    paymentStatus: "pending" | "failed" | "paid" | "refunded";
    transactionId: string;
    purchasedAt: NativeDate;
    deletedAt?: NativeDate | null;
    subscriptionId?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    isDeleted: boolean;
    userId: mongoose.Types.ObjectId;
    courseId: mongoose.Types.ObjectId;
    amount: number;
    paymentStatus: "pending" | "failed" | "paid" | "refunded";
    transactionId: string;
    purchasedAt: NativeDate;
    deletedAt?: NativeDate | null;
    subscriptionId?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    isDeleted: boolean;
    userId: mongoose.Types.ObjectId;
    courseId: mongoose.Types.ObjectId;
    amount: number;
    paymentStatus: "pending" | "failed" | "paid" | "refunded";
    transactionId: string;
    purchasedAt: NativeDate;
    deletedAt?: NativeDate | null;
    subscriptionId?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    isDeleted: boolean;
    userId: mongoose.Types.ObjectId;
    courseId: mongoose.Types.ObjectId;
    amount: number;
    paymentStatus: "pending" | "failed" | "paid" | "refunded";
    transactionId: string;
    purchasedAt: NativeDate;
    deletedAt?: NativeDate | null;
    subscriptionId?: mongoose.Types.ObjectId | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    isDeleted: boolean;
    userId: mongoose.Types.ObjectId;
    courseId: mongoose.Types.ObjectId;
    amount: number;
    paymentStatus: "pending" | "failed" | "paid" | "refunded";
    transactionId: string;
    purchasedAt: NativeDate;
    deletedAt?: NativeDate | null;
    subscriptionId?: mongoose.Types.ObjectId | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=model.d.ts.map