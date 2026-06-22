import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    key: string;
    logo: string;
    siteName: string;
    supportEmail: string;
    favicon: string;
    maintenanceMode: boolean;
    general?: {
        siteName: string;
        supportEmail: string;
        tagline: string;
    } | null;
    seo?: {
        title: string;
        description: string;
        keywords: string;
    } | null;
    payment?: {
        gateway: string;
        currency: string;
        taxRate: string;
    } | null;
    smtp?: {
        host: string;
        port: string;
        password: string;
        username: string;
        useSsl: boolean;
    } | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    key: string;
    logo: string;
    siteName: string;
    supportEmail: string;
    favicon: string;
    maintenanceMode: boolean;
    general?: {
        siteName: string;
        supportEmail: string;
        tagline: string;
    } | null;
    seo?: {
        title: string;
        description: string;
        keywords: string;
    } | null;
    payment?: {
        gateway: string;
        currency: string;
        taxRate: string;
    } | null;
    smtp?: {
        host: string;
        port: string;
        password: string;
        username: string;
        useSsl: boolean;
    } | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    key: string;
    logo: string;
    siteName: string;
    supportEmail: string;
    favicon: string;
    maintenanceMode: boolean;
    general?: {
        siteName: string;
        supportEmail: string;
        tagline: string;
    } | null;
    seo?: {
        title: string;
        description: string;
        keywords: string;
    } | null;
    payment?: {
        gateway: string;
        currency: string;
        taxRate: string;
    } | null;
    smtp?: {
        host: string;
        port: string;
        password: string;
        username: string;
        useSsl: boolean;
    } | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    key: string;
    logo: string;
    siteName: string;
    supportEmail: string;
    favicon: string;
    maintenanceMode: boolean;
    general?: {
        siteName: string;
        supportEmail: string;
        tagline: string;
    } | null;
    seo?: {
        title: string;
        description: string;
        keywords: string;
    } | null;
    payment?: {
        gateway: string;
        currency: string;
        taxRate: string;
    } | null;
    smtp?: {
        host: string;
        port: string;
        password: string;
        username: string;
        useSsl: boolean;
    } | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    key: string;
    logo: string;
    siteName: string;
    supportEmail: string;
    favicon: string;
    maintenanceMode: boolean;
    general?: {
        siteName: string;
        supportEmail: string;
        tagline: string;
    } | null;
    seo?: {
        title: string;
        description: string;
        keywords: string;
    } | null;
    payment?: {
        gateway: string;
        currency: string;
        taxRate: string;
    } | null;
    smtp?: {
        host: string;
        port: string;
        password: string;
        username: string;
        useSsl: boolean;
    } | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    key: string;
    logo: string;
    siteName: string;
    supportEmail: string;
    favicon: string;
    maintenanceMode: boolean;
    general?: {
        siteName: string;
        supportEmail: string;
        tagline: string;
    } | null;
    seo?: {
        title: string;
        description: string;
        keywords: string;
    } | null;
    payment?: {
        gateway: string;
        currency: string;
        taxRate: string;
    } | null;
    smtp?: {
        host: string;
        port: string;
        password: string;
        username: string;
        useSsl: boolean;
    } | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    key: string;
    logo: string;
    siteName: string;
    supportEmail: string;
    favicon: string;
    maintenanceMode: boolean;
    general?: {
        siteName: string;
        supportEmail: string;
        tagline: string;
    } | null;
    seo?: {
        title: string;
        description: string;
        keywords: string;
    } | null;
    payment?: {
        gateway: string;
        currency: string;
        taxRate: string;
    } | null;
    smtp?: {
        host: string;
        port: string;
        password: string;
        username: string;
        useSsl: boolean;
    } | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    key: string;
    logo: string;
    siteName: string;
    supportEmail: string;
    favicon: string;
    maintenanceMode: boolean;
    general?: {
        siteName: string;
        supportEmail: string;
        tagline: string;
    } | null;
    seo?: {
        title: string;
        description: string;
        keywords: string;
    } | null;
    payment?: {
        gateway: string;
        currency: string;
        taxRate: string;
    } | null;
    smtp?: {
        host: string;
        port: string;
        password: string;
        username: string;
        useSsl: boolean;
    } | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=model.d.ts.map