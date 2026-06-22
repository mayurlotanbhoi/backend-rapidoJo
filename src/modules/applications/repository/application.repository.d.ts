import { ApplicationDto } from "../dto/application.dto";
export declare class ApplicationRepository {
    create(payload: ApplicationDto): Promise<import("mongoose").Document<unknown, {}, {
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
    }>;
    list(): Promise<any[]>;
    update(id: string, payload: Partial<ApplicationDto>): Promise<any>;
    delete(id: string): Promise<(import("mongoose").Document<unknown, {}, {
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
    }) | null>;
}
//# sourceMappingURL=application.repository.d.ts.map