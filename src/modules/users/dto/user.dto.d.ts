export interface UserDto {
    name?: string;
    email?: string;
    profileImage?: string;
    mobile?: string;
    subscription?: "free" | "basic" | "premium" | "lifetime";
    applications?: number;
    resumeUploaded?: boolean;
    status?: "active" | "suspended" | "inactive";
    location?: string;
    skills?: string[];
    lastLogin?: string;
    role?: "SUPER_ADMIN" | "ADMIN" | "USER";
}
//# sourceMappingURL=user.dto.d.ts.map