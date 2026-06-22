import { AISessionDto, PromptTemplateDto } from "../dto/ai.dto";
export declare class AIRepository {
    createSession(payload: AISessionDto): Promise<import("mongoose").Document<unknown, {}, {
        type: "resume_review" | "ats_report" | "career_advice" | "job_match";
        status: "failed" | "completed" | "processing";
        userName: string;
        creditsUsed: number;
        score?: number | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        type: "resume_review" | "ats_report" | "career_advice" | "job_match";
        status: "failed" | "completed" | "processing";
        userName: string;
        creditsUsed: number;
        score?: number | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    listSessions(): Promise<any[]>;
    createTemplate(payload: PromptTemplateDto): Promise<import("mongoose").Document<unknown, {}, {
        type: string;
        name: string;
        status: "active" | "inactive";
        template: string;
        variables: string[];
        usageCount: number;
        lastUsed: string;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
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
    }, "id"> & {
        id: string;
    }>;
    listTemplates(): Promise<any[]>;
    updateTemplate(id: string, payload: Partial<PromptTemplateDto>): Promise<any>;
}
//# sourceMappingURL=ai.repository.d.ts.map