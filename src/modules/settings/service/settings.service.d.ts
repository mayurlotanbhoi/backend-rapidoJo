import { ApiResponse } from "../../../shared/response/api-response";
import { SettingsDto } from "../dto/settings.dto";
export declare class SettingsService {
    private repository;
    get(): Promise<ApiResponse<{
        general: {
            siteName: string;
            tagline: string;
            supportEmail: string;
        };
        seo: {
            title: string;
            description: string;
            keywords: string;
        };
        payment: {
            gateway: string;
            currency: string;
            taxRate: string;
        };
        smtp: {
            host: string;
            port: string;
            username: string;
            password: string;
            useSsl: boolean;
        };
    } | ({
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
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)>>;
    update(payload: SettingsDto): Promise<ApiResponse<{
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
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>>;
}
//# sourceMappingURL=settings.service.d.ts.map