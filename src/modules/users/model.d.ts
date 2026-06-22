import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    name: string;
    location: string;
    skills: string[];
    status: "active" | "inactive" | "suspended";
    applications: number;
    isDeleted: boolean;
    email: string;
    profileImage: string;
    googleId: string;
    password: string;
    mobile: string;
    subscription: "premium" | "free" | "basic" | "lifetime";
    resumeUploaded: boolean;
    role: "SUPER_ADMIN" | "ADMIN" | "USER";
    refreshToken: string;
    deletedAt?: NativeDate | null;
    lastLogin?: NativeDate | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    location: string;
    skills: string[];
    status: "active" | "inactive" | "suspended";
    applications: number;
    isDeleted: boolean;
    email: string;
    profileImage: string;
    googleId: string;
    password: string;
    mobile: string;
    subscription: "premium" | "free" | "basic" | "lifetime";
    resumeUploaded: boolean;
    role: "SUPER_ADMIN" | "ADMIN" | "USER";
    refreshToken: string;
    deletedAt?: NativeDate | null;
    lastLogin?: NativeDate | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    name: string;
    location: string;
    skills: string[];
    status: "active" | "inactive" | "suspended";
    applications: number;
    isDeleted: boolean;
    email: string;
    profileImage: string;
    googleId: string;
    password: string;
    mobile: string;
    subscription: "premium" | "free" | "basic" | "lifetime";
    resumeUploaded: boolean;
    role: "SUPER_ADMIN" | "ADMIN" | "USER";
    refreshToken: string;
    deletedAt?: NativeDate | null;
    lastLogin?: NativeDate | null;
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
    skills: string[];
    status: "active" | "inactive" | "suspended";
    applications: number;
    isDeleted: boolean;
    email: string;
    profileImage: string;
    googleId: string;
    password: string;
    mobile: string;
    subscription: "premium" | "free" | "basic" | "lifetime";
    resumeUploaded: boolean;
    role: "SUPER_ADMIN" | "ADMIN" | "USER";
    refreshToken: string;
    deletedAt?: NativeDate | null;
    lastLogin?: NativeDate | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    name: string;
    location: string;
    skills: string[];
    status: "active" | "inactive" | "suspended";
    applications: number;
    isDeleted: boolean;
    email: string;
    profileImage: string;
    googleId: string;
    password: string;
    mobile: string;
    subscription: "premium" | "free" | "basic" | "lifetime";
    resumeUploaded: boolean;
    role: "SUPER_ADMIN" | "ADMIN" | "USER";
    refreshToken: string;
    deletedAt?: NativeDate | null;
    lastLogin?: NativeDate | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    name: string;
    location: string;
    skills: string[];
    status: "active" | "inactive" | "suspended";
    applications: number;
    isDeleted: boolean;
    email: string;
    profileImage: string;
    googleId: string;
    password: string;
    mobile: string;
    subscription: "premium" | "free" | "basic" | "lifetime";
    resumeUploaded: boolean;
    role: "SUPER_ADMIN" | "ADMIN" | "USER";
    refreshToken: string;
    deletedAt?: NativeDate | null;
    lastLogin?: NativeDate | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    name: string;
    location: string;
    skills: string[];
    status: "active" | "inactive" | "suspended";
    applications: number;
    isDeleted: boolean;
    email: string;
    profileImage: string;
    googleId: string;
    password: string;
    mobile: string;
    subscription: "premium" | "free" | "basic" | "lifetime";
    resumeUploaded: boolean;
    role: "SUPER_ADMIN" | "ADMIN" | "USER";
    refreshToken: string;
    deletedAt?: NativeDate | null;
    lastLogin?: NativeDate | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    location: string;
    skills: string[];
    status: "active" | "inactive" | "suspended";
    applications: number;
    isDeleted: boolean;
    email: string;
    profileImage: string;
    googleId: string;
    password: string;
    mobile: string;
    subscription: "premium" | "free" | "basic" | "lifetime";
    resumeUploaded: boolean;
    role: "SUPER_ADMIN" | "ADMIN" | "USER";
    refreshToken: string;
    deletedAt?: NativeDate | null;
    lastLogin?: NativeDate | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=model.d.ts.map