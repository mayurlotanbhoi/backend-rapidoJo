"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("../service/auth.service");
const service = new auth_service_1.AuthService();
class AuthController {
    async googleLogin(req, res) {
        const response = await service.googleLogin(req.body);
        const { accessToken, refreshToken, user } = response.data;
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
        });
        return res.status(200).json({
            success: true,
            message: response.message,
            data: { accessToken, refreshToken, user },
        });
    }
    async refresh(req, res) {
        const token = req.body.refreshToken || req.cookies?.refreshToken;
        const response = await service.refresh(token);
        res.cookie("refreshToken", response.data.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
        });
        return res.status(200).json(response);
    }
    async logout(req, res) {
        const userId = req.authUser?.id || req.body.userId;
        if (!userId) {
            return res.status(400).json({ success: false, message: "User id required" });
        }
        const response = await service.logout(String(userId));
        res.clearCookie("refreshToken");
        return res.status(200).json(response);
    }
    async profile(req, res) {
        const response = await service.profile(String(req.authUser?.id));
        return res.status(200).json(response);
    }
    async updateRole(req, res) {
        const response = await service.updateRole(String(req.params.id), req.body);
        return res.status(200).json(response);
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map