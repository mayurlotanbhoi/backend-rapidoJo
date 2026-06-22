import { ApiResponse } from "../../../shared/response/api-response";
import { ApplicationDto } from "../dto/application.dto";
export declare class ApplicationService {
    private repository;
    create(payload: ApplicationDto): Promise<ApiResponse<any>>;
    list(): Promise<ApiResponse<any[]>>;
    update(id: string, payload: Partial<ApplicationDto>): Promise<ApiResponse<any>>;
    delete(id: string): Promise<ApiResponse<(import("mongoose").Document<unknown, {}, {
        company: string;
        status: "rejected" | "applied" | "screening" | "interview" | "selected";
        candidateName: string;
        candidateEmail: string;
        jobTitle: string;
        appliedDate: string;
        resumeUrl: string;
        matchScore: number;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        company: string;
        status: "rejected" | "applied" | "screening" | "interview" | "selected";
        candidateName: string;
        candidateEmail: string;
        jobTitle: string;
        appliedDate: string;
        resumeUrl: string;
        matchScore: number;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }) | null>>;
}
//# sourceMappingURL=application.service.d.ts.map