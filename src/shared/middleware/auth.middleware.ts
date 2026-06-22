import { NextFunction, Request, Response } from "express";
import { verifyAccessToken } from "../utils/jwt";
import UserModel from "../../modules/users/model";

declare global {
  namespace Express {
    interface Request {
      authUser?: {
        id: string;
        role: string;
        email: string;
      };
    }
  }
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const header = req.headers.authorization;

  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  const token = header.slice(7);
  try {
    const payload = verifyAccessToken<{ id: string; role: string; email: string }>(token);
    const user = await UserModel.findById(payload.id).lean();

    if (!user || (user as any).isDeleted) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    req.authUser = {
      id: String(payload.id),
      role: String(payload.role),
      email: String(payload.email),
    };
    next();
  } catch {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};
