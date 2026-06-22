import { CompanyDto } from "../dto/company.dto";
export declare class CompanyRepository {
    create(payload: CompanyDto): Promise<import("mongoose").Document<unknown, {}, {
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
    }>;
    getCompanies(page?: number, limit?: number, search?: string): Promise<{
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
    }>;
    update(id: string, payload: Partial<CompanyDto>): Promise<({
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
    }>) | null>;
    delete(id: string): Promise<(import("mongoose").Document<unknown, {}, {
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
    }) | null>;
}
//# sourceMappingURL=company.repository.d.ts.map