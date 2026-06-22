import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    title: string;
    type: "push" | "email" | "sms" | "in-app";
    status: "draft" | "sent" | "failed" | "scheduled";
    isDeleted: boolean;
    message: string;
    audience: string;
    recipients: number;
    sentAt: string;
    deletedAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    title: string;
    type: "push" | "email" | "sms" | "in-app";
    status: "draft" | "sent" | "failed" | "scheduled";
    isDeleted: boolean;
    message: string;
    audience: string;
    recipients: number;
    sentAt: string;
    deletedAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    title: string;
    type: "push" | "email" | "sms" | "in-app";
    status: "draft" | "sent" | "failed" | "scheduled";
    isDeleted: boolean;
    message: string;
    audience: string;
    recipients: number;
    sentAt: string;
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
    title: string;
    type: "push" | "email" | "sms" | "in-app";
    status: "draft" | "sent" | "failed" | "scheduled";
    isDeleted: boolean;
    message: string;
    audience: string;
    recipients: number;
    sentAt: string;
    deletedAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    title: string;
    type: "push" | "email" | "sms" | "in-app";
    status: "draft" | "sent" | "failed" | "scheduled";
    isDeleted: boolean;
    message: string;
    audience: string;
    recipients: number;
    sentAt: string;
    deletedAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    title: string;
    type: "push" | "email" | "sms" | "in-app";
    status: "draft" | "sent" | "failed" | "scheduled";
    isDeleted: boolean;
    message: string;
    audience: string;
    recipients: number;
    sentAt: string;
    deletedAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    title: string;
    type: "push" | "email" | "sms" | "in-app";
    status: "draft" | "sent" | "failed" | "scheduled";
    isDeleted: boolean;
    message: string;
    audience: string;
    recipients: number;
    sentAt: string;
    deletedAt?: NativeDate | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    title: string;
    type: "push" | "email" | "sms" | "in-app";
    status: "draft" | "sent" | "failed" | "scheduled";
    isDeleted: boolean;
    message: string;
    audience: string;
    recipients: number;
    sentAt: string;
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