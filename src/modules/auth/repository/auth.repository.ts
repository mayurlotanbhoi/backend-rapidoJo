import UserModel from "../../users/model";
import { GoogleLoginDto, UpdateRoleDto } from "../dto/auth.dto";

export class AuthRepository {
  async findById(id: string) {
    return UserModel.findById(id);
  }

  async findByEmail(email: string) {
    return UserModel.findOne({ email } as any);
  }

  async findByRefreshToken(refreshToken: string) {
    return UserModel.findOne({ refreshToken });
  }

  async syncGoogleUser(data: {
    googleId: string;
    email: string;
    name: string;
    profileImage: string;
    role?: string | undefined;
  }) {
    const update: Record<string, unknown> = {
      googleId: data.googleId,
      email: data.email,
      name: data.name,
      profileImage: data.profileImage,
      status: "active",
      isDeleted: false,
    };

    if (data.role) {
      update.role = data.role;
    }

    return UserModel.findOneAndUpdate({ email: data.email } as any, { $set: update } as any, { new: true, upsert: true, runValidators: true });
  }

  async setRefreshToken(userId: string, refreshToken: string) {
    return UserModel.findByIdAndUpdate(userId, { refreshToken, lastLogin: new Date() }, { new: true });
  }

  async clearRefreshToken(userId: string) {
    return UserModel.findByIdAndUpdate(userId, { refreshToken: "" }, { new: true });
  }

  async updateRole(userId: string, payload: UpdateRoleDto) {
    return UserModel.findByIdAndUpdate(userId, payload, { new: true, runValidators: true });
  }
}
