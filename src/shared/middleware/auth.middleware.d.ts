import { NextFunction, Request, Response } from "express";
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
export declare const authMiddleware: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=auth.middleware.d.ts.map