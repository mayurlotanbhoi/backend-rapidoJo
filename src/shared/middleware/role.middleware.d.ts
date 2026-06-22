import { NextFunction, Request, Response } from "express";
import { Role } from "../constants/roles";
export declare const roleMiddleware: (...roles: Role[]) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=role.middleware.d.ts.map