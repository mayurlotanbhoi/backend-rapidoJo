import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    active: boolean;
    name: string;
    status: "active" | "inactive";
    price: number;
    duration: string;
    period: "lifetime" | "monthly" | "yearly";
    features: string[];
    activeUsers: number;
    revenue: number;
    color: string;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    active: boolean;
    name: string;
    status: "active" | "inactive";
    price: number;
    duration: string;
    period: "lifetime" | "monthly" | "yearly";
    features: string[];
    activeUsers: number;
    revenue: number;
    color: string;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    active: boolean;
    name: string;
    status: "active" | "inactive";
    price: number;
    duration: string;
    period: "lifetime" | "monthly" | "yearly";
    features: string[];
    activeUsers: number;
    revenue: number;
    color: string;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    active: boolean;
    name: string;
    status: "active" | "inactive";
    price: number;
    duration: string;
    period: "lifetime" | "monthly" | "yearly";
    features: string[];
    activeUsers: number;
    revenue: number;
    color: string;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    active: boolean;
    name: string;
    status: "active" | "inactive";
    price: number;
    duration: string;
    period: "lifetime" | "monthly" | "yearly";
    features: string[];
    activeUsers: number;
    revenue: number;
    color: string;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    active: boolean;
    name: string;
    status: "active" | "inactive";
    price: number;
    duration: string;
    period: "lifetime" | "monthly" | "yearly";
    features: string[];
    activeUsers: number;
    revenue: number;
    color: string;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    active: boolean;
    name: string;
    status: "active" | "inactive";
    price: number;
    duration: string;
    period: "lifetime" | "monthly" | "yearly";
    features: string[];
    activeUsers: number;
    revenue: number;
    color: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    active: boolean;
    name: string;
    status: "active" | "inactive";
    price: number;
    duration: string;
    period: "lifetime" | "monthly" | "yearly";
    features: string[];
    activeUsers: number;
    revenue: number;
    color: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=model.d.ts.map