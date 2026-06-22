import { ApiResponse } from "../../../shared/response/api-response";
import { AISessionDto, PromptTemplateDto } from "../dto/ai.dto";
export declare class AIService {
    private repository;
    createSession(payload: AISessionDto): Promise<ApiResponse<{
        type: "resume_review" | "ats_report" | "career_advice" | "job_match";
        status: "failed" | "completed" | "processing";
        userName: string;
        creditsUsed: number;
        score?: number | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
        createdAt: string | undefined;
        updatedAt: string | undefined;
    }>>;
    listSessions(): Promise<ApiResponse<any[]>>;
    createTemplate(payload: PromptTemplateDto): Promise<ApiResponse<{
        type: string;
        name: string;
        status: "active" | "inactive";
        template: string;
        variables: string[];
        usageCount: number;
        lastUsed: string;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
        createdAt: string | undefined;
        updatedAt: string | undefined;
    }>>;
    listTemplates(): Promise<ApiResponse<any[]>>;
    updateTemplate(id: string, payload: Partial<PromptTemplateDto>): Promise<ApiResponse<any>>;
}
//# sourceMappingURL=ai.service.d.ts.map