import { ApiResponse } from "../../../shared/response/api-response";
import { verifyGoogleCredential } from "../../../shared/utils/google-auth";
import { signTokens, verifyRefreshToken } from "../../../shared/utils/jwt";
import { AuthRepository } from "../repository/auth.repository";
import { GoogleLoginDto, UpdateRoleDto } from "../dto/auth.dto";

const buildProfile = (user: any) => ({
  id: user._id || user.id,
  name: user.name,
  email: user.email,
  profileImage: user.profileImage,
  role: user.role,
  status: user.status,
  lastLogin: user.lastLogin,
});

export class AuthService {
  private repository = new AuthRepository();

  async googleLogin(payload: GoogleLoginDto) {
    const googleUser = await verifyGoogleCredential(payload.credential);
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

    const tokens = signTokens({
      id: String(user._id),
      role: user.role,
      email: user.email,
    });

    await this.repository.setRefreshToken(String(user._id), tokens.refreshToken);

    return new ApiResponse(true, "Google login successful", {
      user: buildProfile(user),
      ...tokens,
    });
  }

  async refresh(refreshToken: string) {
    const payload = verifyRefreshToken<{ id: string; role: string; email: string }>(refreshToken);
    const user = await this.repository.findByRefreshToken(refreshToken);

    if (!user || String(user._id) !== String(payload.id)) {
      throw new Error("Invalid refresh token");
    }

    const tokens = signTokens({
      id: String(user._id),
      role: user.role,
      email: user.email,
    });

    await this.repository.setRefreshToken(String(user._id), tokens.refreshToken);

    return new ApiResponse(true, "Token refreshed successfully", {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    });
  }

  async logout(userId: string) {
    await this.repository.clearRefreshToken(userId);
    return new ApiResponse(true, "Logged out successfully", null);
  }

  async profile(userId: string) {
    const user = await this.repository.findById(userId);
    return new ApiResponse(true, "Profile fetched successfully", user ? buildProfile(user) : null);
  }

  async updateRole(userId: string, payload: UpdateRoleDto) {
    const user = await this.repository.updateRole(userId, payload);
    return new ApiResponse(true, "Role updated successfully", user ? buildProfile(user) : null);
  }
}
