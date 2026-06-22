import { CreateJobDto } from "../dto/create-job.dto";
import { ApiResponse } from "../../../shared/response/api-response";
export declare class JobService {
    private repository;
    createJob(payload: CreateJobDto): Promise<import("mongoose").Document<unknown, {}, {
        title: string;
        type: string;
        company: string;
        source: string;
        sourceUrl: string;
        location: string;
        salaryMin: number;
        salaryMax: number;
        expMin: number;
        expMax: number;
        skills: string;
        description: string;
        requirements: string;
        benefits: string;
        companyEmail: string;
        status: "active" | "inactive" | "expired" | "draft";
        applications: number;
        remote: boolean;
        hybrid: boolean;
        isPremium: boolean;
        premium: boolean;
        isFeatured: boolean;
        featured: boolean;
        isUrgent: boolean;
        isSponsored: boolean;
        postPhoto: string;
        isDeleted: boolean;
        expiryDate?: NativeDate | null;
        deletedAt?: NativeDate | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        title: string;
        type: string;
        company: string;
        source: string;
        sourceUrl: string;
        location: string;
        salaryMin: number;
        salaryMax: number;
        expMin: number;
        expMax: number;
        skills: string;
        description: string;
        requirements: string;
        benefits: string;
        companyEmail: string;
        status: "active" | "inactive" | "expired" | "draft";
        applications: number;
        remote: boolean;
        hybrid: boolean;
        isPremium: boolean;
        premium: boolean;
        isFeatured: boolean;
        featured: boolean;
        isUrgent: boolean;
        isSponsored: boolean;
        postPhoto: string;
        isDeleted: boolean;
        expiryDate?: NativeDate | null;
        deletedAt?: NativeDate | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    createManyJob(payload: CreateJobDto[]): Promise<(Omit<import("mongoose").Document<unknown, {}, {
        title: string;
        type: string;
        company: string;
        source: string;
        sourceUrl: string;
        location: string;
        salaryMin: number;
        salaryMax: number;
        expMin: number;
        expMax: number;
        skills: string;
        description: string;
        requirements: string;
        benefits: string;
        companyEmail: string;
        status: "active" | "inactive" | "expired" | "draft";
        applications: number;
        remote: boolean;
        hybrid: boolean;
        isPremium: boolean;
        premium: boolean;
        isFeatured: boolean;
        featured: boolean;
        isUrgent: boolean;
        isSponsored: boolean;
        postPhoto: string;
        isDeleted: boolean;
        expiryDate?: NativeDate | null;
        deletedAt?: NativeDate | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        title: string;
        type: string;
        company: string;
        source: string;
        sourceUrl: string;
        location: string;
        salaryMin: number;
        salaryMax: number;
        expMin: number;
        expMax: number;
        skills: string;
        description: string;
        requirements: string;
        benefits: string;
        companyEmail: string;
        status: "active" | "inactive" | "expired" | "draft";
        applications: number;
        remote: boolean;
        hybrid: boolean;
        isPremium: boolean;
        premium: boolean;
        isFeatured: boolean;
        featured: boolean;
        isUrgent: boolean;
        isSponsored: boolean;
        postPhoto: string;
        isDeleted: boolean;
        expiryDate?: NativeDate | null;
        deletedAt?: NativeDate | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }, keyof CreateJobDto> & Omit<CreateJobDto, "_id">)[]>;
    updateJob(id: string, payload: CreateJobDto): Promise<(import("mongoose").Document<unknown, {}, {
        title: string;
        type: string;
        company: string;
        source: string;
        sourceUrl: string;
        location: string;
        salaryMin: number;
        salaryMax: number;
        expMin: number;
        expMax: number;
        skills: string;
        description: string;
        requirements: string;
        benefits: string;
        companyEmail: string;
        status: "active" | "inactive" | "expired" | "draft";
        applications: number;
        remote: boolean;
        hybrid: boolean;
        isPremium: boolean;
        premium: boolean;
        isFeatured: boolean;
        featured: boolean;
        isUrgent: boolean;
        isSponsored: boolean;
        postPhoto: string;
        isDeleted: boolean;
        expiryDate?: NativeDate | null;
        deletedAt?: NativeDate | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        title: string;
        type: string;
        company: string;
        source: string;
        sourceUrl: string;
        location: string;
        salaryMin: number;
        salaryMax: number;
        expMin: number;
        expMax: number;
        skills: string;
        description: string;
        requirements: string;
        benefits: string;
        companyEmail: string;
        status: "active" | "inactive" | "expired" | "draft";
        applications: number;
        remote: boolean;
        hybrid: boolean;
        isPremium: boolean;
        premium: boolean;
        isFeatured: boolean;
        featured: boolean;
        isUrgent: boolean;
        isSponsored: boolean;
        postPhoto: string;
        isDeleted: boolean;
        expiryDate?: NativeDate | null;
        deletedAt?: NativeDate | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }) | null>;
    getJobs(page?: number, limit?: number, search?: string): Promise<ApiResponse<({
        title: string;
        type: string;
        company: string;
        source: string;
        sourceUrl: string;
        location: string;
        salaryMin: number;
        salaryMax: number;
        expMin: number;
        expMax: number;
        skills: string;
        description: string;
        requirements: string;
        benefits: string;
        companyEmail: string;
        status: "active" | "inactive" | "expired" | "draft";
        applications: number;
        remote: boolean;
        hybrid: boolean;
        isPremium: boolean;
        premium: boolean;
        isFeatured: boolean;
        featured: boolean;
        isUrgent: boolean;
        isSponsored: boolean;
        postPhoto: string;
        isDeleted: boolean;
        expiryDate?: NativeDate | null;
        deletedAt?: NativeDate | null;
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>>;
    deleteJob(id: string): Promise<ApiResponse<(import("mongoose").Document<unknown, {}, {
        title: string;
        type: string;
        company: string;
        source: string;
        sourceUrl: string;
        location: string;
        salaryMin: number;
        salaryMax: number;
        expMin: number;
        expMax: number;
        skills: string;
        description: string;
        requirements: string;
        benefits: string;
        companyEmail: string;
        status: "active" | "inactive" | "expired" | "draft";
        applications: number;
        remote: boolean;
        hybrid: boolean;
        isPremium: boolean;
        premium: boolean;
        isFeatured: boolean;
        featured: boolean;
        isUrgent: boolean;
        isSponsored: boolean;
        postPhoto: string;
        isDeleted: boolean;
        expiryDate?: NativeDate | null;
        deletedAt?: NativeDate | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        title: string;
        type: string;
        company: string;
        source: string;
        sourceUrl: string;
        location: string;
        salaryMin: number;
        salaryMax: number;
        expMin: number;
        expMax: number;
        skills: string;
        description: string;
        requirements: string;
        benefits: string;
        companyEmail: string;
        status: "active" | "inactive" | "expired" | "draft";
        applications: number;
        remote: boolean;
        hybrid: boolean;
        isPremium: boolean;
        premium: boolean;
        isFeatured: boolean;
        featured: boolean;
        isUrgent: boolean;
        isSponsored: boolean;
        postPhoto: string;
        isDeleted: boolean;
        expiryDate?: NativeDate | null;
        deletedAt?: NativeDate | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }) | null>>;
}
//# sourceMappingURL=job.service.d.ts.map