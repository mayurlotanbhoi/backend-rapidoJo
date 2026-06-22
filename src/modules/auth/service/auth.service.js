"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const api_response_1 = require("../../../shared/response/api-response");
const google_auth_1 = require("../../../shared/utils/google-auth");
const jwt_1 = require("../../../shared/utils/jwt");
const auth_repository_1 = require("../repository/auth.repository");
const buildProfile = (user) => ({
    id: user._id || user.id,
    name: user.name,
    email: user.email,
    profileImage: user.profileImage,
    role: user.role,
    status: user.status,
    lastLogin: user.lastLogin,
});
class AuthService {
    repository = new auth_repository_1.AuthRepository();
    async googleLogin(payload) {
        const googleUser = await (0, google_auth_1.verifyGoogleCredential)(payload.credential);
        const user = await this.repository.syncGoogleUser({
            googleId: googleUser.googleId,
            email: googleUser.email,
            name: googleUser.name,
            profileImage: googleUser.profileImage,
            role: payload.role,
        });
        if (!user) {
            throw new Error("Unable to create user");
        }
        const tokens = (0, jwt_1.signTokens)({
            id: String(user._id),
            role: user.role,
            email: user.email,
        });
        await this.repository.setRefreshToken(String(user._id), tokens.refreshToken);
        return new api_response_1.ApiResponse(true, "Google login successful", {
            user: buildProfile(user),
            ...tokens,
        });
    }
    async refresh(refreshToken) {
        const payload = (0, jwt_1.verifyRefreshToken)(refreshToken);
        const user = await this.repository.findByRefreshToken(refreshToken);
        if (!user || String(user._id) !== String(payload.id)) {
            throw new Error("Invalid refresh token");
        }
        const tokens = (0, jwt_1.signTokens)({
            id: String(user._id),
            role: user.role,
            email: user.email,
        });
        await this.repository.setRefreshToken(String(user._id), tokens.refreshToken);
        return new api_response_1.ApiResponse(true, "Token refreshed successfully", {
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken,
        });
    }
    async logout(userId) {
        await this.repository.clearRefreshToken(userId);
        return new api_response_1.ApiResponse(true, "Logged out successfully", null);
    }
    async profile(userId) {
        const user = await this.repository.findById(userId);
        return new api_response_1.ApiResponse(true, "Profile fetched successfully", user ? buildProfile(user) : null);
    }
    async updateRole(userId, payload) {
        const user = await this.repository.updateRole(userId, payload);
        return new api_response_1.ApiResponse(true, "Role updated successfully", user ? buildProfile(user) : null);
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map