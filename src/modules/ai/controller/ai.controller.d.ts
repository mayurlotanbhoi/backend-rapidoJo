import { Request, Response } from "express";
export declare class AIController {
    createSession(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    listSessions(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    createTemplate(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    listTemplates(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updateTemplate(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=ai.controller.d.ts.map