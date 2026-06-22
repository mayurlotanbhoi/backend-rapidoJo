import { Request, Response } from "express";
export declare class AuthController {
    googleLogin(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    refresh(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    logout(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    profile(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updateRole(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=auth.controller.d.ts.map