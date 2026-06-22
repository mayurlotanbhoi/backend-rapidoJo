import { UpdateRoleDto } from "../dto/auth.dto";
export declare class AuthRepository {
    findById(id: string): Promise<(import("mongoose").Document<unknown, {}, {
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
    findByEmail(email: string): Promise<(import("mongoose").Document<unknown, {}, {
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
    findByRefreshToken(refreshToken: string): Promise<(import("mongoose").Document<unknown, {}, {
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
    syncGoogleUser(data: {
        googleId: string;
        email: string;
        name: string;
        profileImage: string;
        role?: string | undefined;
    }): Promise<import("mongoose").Document<unknown, {}, {
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
    setRefreshToken(userId: string, refreshToken: string): Promise<(import("mongoose").Document<unknown, {}, {
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
    clearRefreshToken(userId: string): Promise<(import("mongoose").Document<unknown, {}, {
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
    updateRole(userId: string, payload: UpdateRoleDto): Promise<(import("mongoose").Document<unknown, {}, {
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
//# sourceMappingURL=auth.repository.d.ts.map