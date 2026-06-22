"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const model_1 = __importDefault(require("../../users/model"));
class AuthRepository {
    async findById(id) {
        return model_1.default.findById(id);
    }
    async findByEmail(email) {
        return model_1.default.findOne({ email });
    }
    async findByRefreshToken(refreshToken) {
        return model_1.default.findOne({ refreshToken });
    }
    async syncGoogleUser(data) {
        const update = {
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
        return model_1.default.findOneAndUpdate({ email: data.email }, { $set: update }, { new: true, upsert: true, runValidators: true });
    }
    async setRefreshToken(userId, refreshToken) {
        return model_1.default.findByIdAndUpdate(userId, { refreshToken, lastLogin: new Date() }, { new: true });
    }
    async clearRefreshToken(userId) {
        return model_1.default.findByIdAndUpdate(userId, { refreshToken: "" }, { new: true });
    }
    async updateRole(userId, payload) {
        return model_1.default.findByIdAndUpdate(userId, payload, { new: true, runValidators: true });
    }
}
exports.AuthRepository = AuthRepository;
//# sourceMappingURL=auth.repository.js.map