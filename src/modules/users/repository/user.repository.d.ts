import { UserDto } from "../dto/user.dto";
export declare class UserRepository {
    create(payload: UserDto): Promise<import("mongoose").Document<unknown, {}, {
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
    }>;
    getUsers(page?: number, limit?: number, search?: string): Promise<{
        rows: any[];
        total: number;
        page: number;
        pageSize: number;
    }>;
    update(id: string, payload: Partial<UserDto>): Promise<any>;
    delete(id: string): Promise<(import("mongoose").Document<unknown, {}, {
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
    }) | null>;
}
//# sourceMappingURL=user.repository.d.ts.map