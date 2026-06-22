import { NextFunction, Request, Response } from "express";
import { Role } from "../constants/roles";

export const roleMiddleware =
  (...roles: Role[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    const role = req.authUser?.role as Role | undefined;

    if (!role || !roles.includes(role)) {
      return res.status(403).json({ success: false, message: "Forbidden" });
    }

    next();
  };
