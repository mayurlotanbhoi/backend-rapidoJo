import { ApiResponse } from "../../../shared/response/api-response";
import { UserDto } from "../dto/user.dto";
export declare class UserService {
    private repository;
    create(payload: UserDto): Promise<ApiResponse<any>>;
    list(page?: number, limit?: number, search?: string): Promise<ApiResponse<{
        rows: any[];
        total: number;
        page: number;
        pageSize: number;
    }>>;
    update(id: string, payload: Partial<UserDto>): Promise<ApiResponse<any>>;
    delete(id: string): Promise<ApiResponse<(import("mongoose").Document<unknown, {}, {
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
    } & import("mongoose").DefaultTimestampProps, {
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
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }) | null>>;
}
//# sourceMappingURL=user.service.d.ts.map