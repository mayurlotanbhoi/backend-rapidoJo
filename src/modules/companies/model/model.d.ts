import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    name: string;
    location: string;
    description: string;
    status: "suspended" | "approved" | "pending" | "rejected";
    isDeleted: boolean;
    size: string;
    email: string;
    logo: string;
    industry: string;
    openJobs: number;
    employees: string;
    website: string;
    deletedAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    location: string;
    description: string;
    status: "suspended" | "approved" | "pending" | "rejected";
    isDeleted: boolean;
    size: string;
    email: string;
    logo: string;
    industry: string;
    openJobs: number;
    employees: string;
    website: string;
    deletedAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    name: string;
    location: string;
    description: string;
    status: "suspended" | "approved" | "pending" | "rejected";
    isDeleted: boolean;
    size: string;
    email: string;
    logo: string;
    industry: string;
    openJobs: number;
    employees: string;
    website: string;
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
    name: string;
    location: string;
    description: string;
    status: "suspended" | "approved" | "pending" | "rejected";
    isDeleted: boolean;
    size: string;
    email: string;
    logo: string;
    industry: string;
    openJobs: number;
    employees: string;
    website: string;
    deletedAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    name: string;
    location: string;
    description: string;
    status: "suspended" | "approved" | "pending" | "rejected";
    isDeleted: boolean;
    size: string;
    email: string;
    logo: string;
    industry: string;
    openJobs: number;
    employees: string;
    website: string;
    deletedAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    name: string;
    location: string;
    description: string;
    status: "suspended" | "approved" | "pending" | "rejected";
    isDeleted: boolean;
    size: string;
    email: string;
    logo: string;
    industry: string;
    openJobs: number;
    employees: string;
    website: string;
    deletedAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    name: string;
    location: string;
    description: string;
    status: "suspended" | "approved" | "pending" | "rejected";
    isDeleted: boolean;
    size: string;
    email: string;
    logo: string;
    industry: string;
    openJobs: number;
    employees: string;
    website: string;
    deletedAt?: NativeDate | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    location: string;
    description: string;
    status: "suspended" | "approved" | "pending" | "rejected";
    isDeleted: boolean;
    size: string;
    email: string;
    logo: string;
    industry: string;
    openJobs: number;
    employees: string;
    website: string;
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