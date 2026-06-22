import { ApiResponse } from "../../../shared/response/api-response";
import { GoogleLoginDto, UpdateRoleDto } from "../dto/auth.dto";
export declare class AuthService {
    private repository;
    googleLogin(payload: GoogleLoginDto): Promise<ApiResponse<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: any;
            name: any;
            email: any;
            profileImage: any;
            role: any;
            status: any;
            lastLogin: any;
        };
    }>>;
    refresh(refreshToken: string): Promise<ApiResponse<{
        accessToken: string;
        refreshToken: string;
    }>>;
    logout(userId: string): Promise<ApiResponse<null>>;
    profile(userId: string): Promise<ApiResponse<{
        id: any;
        name: any;
        email: any;
        profileImage: any;
        role: any;
        status: any;
        lastLogin: any;
    } | null>>;
    updateRole(userId: string, payload: UpdateRoleDto): Promise<ApiResponse<{
        id: any;
        name: any;
        email: any;
        profileImage: any;
        role: any;
        status: any;
        lastLogin: any;
    } | null>>;
}
//# sourceMappingURL=auth.service.d.ts.map