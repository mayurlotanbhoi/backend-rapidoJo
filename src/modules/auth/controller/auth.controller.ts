import { Request, Response } from "express";
import { AuthService } from "../service/auth.service";

const service = new AuthService();

export class AuthController {
  async googleLogin(req: Request, res: Response) {
    const response = await service.googleLogin(req.body);
    const { accessToken, refreshToken, user } = response.data as any;

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

  async refresh(req: Request, res: Response) {
    const token = req.body.refreshToken || req.cookies?.refreshToken;
    const response = await service.refresh(token);

    res.cookie("refreshToken", (response.data as any).refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return res.status(200).json(response);
  }

  async logout(req: Request, res: Response) {
    const userId = req.authUser?.id || req.body.userId;
    if (!userId) {
      return res.status(400).json({ success: false, message: "User id required" });
    }
    const response = await service.logout(String(userId));
    res.clearCookie("refreshToken");
    return res.status(200).json(response);
  }

  async profile(req: Request, res: Response) {
    const response = await service.profile(String(req.authUser?.id));
    return res.status(200).json(response);
  }

  async updateRole(req: Request, res: Response) {
    const response = await service.updateRole(String(req.params.id), req.body);
    return res.status(200).json(response);
  }
}
