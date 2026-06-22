import { ApiResponse } from "../../../shared/response/api-response";
import { CompanyDto } from "../dto/company.dto";
export declare class CompanyService {
    private repository;
    create(payload: CompanyDto): Promise<ApiResponse<{
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
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
        createdAt: string | undefined;
        updatedAt: string | undefined;
    }>>;
    getCompanies(page?: number, limit?: number, search?: string): Promise<ApiResponse<{
        rows: ({
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
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            id: string;
            createdAt: string | undefined;
            updatedAt: string | undefined;
        })[];
        total: number;
        page: number;
        pageSize: number;
    }>>;
    update(id: string, payload: Partial<CompanyDto>): Promise<ApiResponse<any>>;
    delete(id: string): Promise<ApiResponse<(import("mongoose").Document<unknown, {}, {
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
    } & import("mongoose").DefaultTimestampProps, {
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
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }) | null>>;
}
//# sourceMappingURL=company.service.d.ts.map