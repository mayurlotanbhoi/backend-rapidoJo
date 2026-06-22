import mongoose from "mongoose";
export declare const AISessionModel: mongoose.Model<{
    type: "resume_review" | "ats_report" | "career_advice" | "job_match";
    status: "failed" | "completed" | "processing";
    userName: string;
    creditsUsed: number;
    score?: number | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    type: "resume_review" | "ats_report" | "career_advice" | "job_match";
    status: "failed" | "completed" | "processing";
    userName: string;
    creditsUsed: number;
    score?: number | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    type: "resume_review" | "ats_report" | "career_advice" | "job_match";
    status: "failed" | "completed" | "processing";
    userName: string;
    creditsUsed: number;
    score?: number | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    type: "resume_review" | "ats_report" | "career_advice" | "job_match";
    status: "failed" | "completed" | "processing";
    userName: string;
    creditsUsed: number;
    score?: number | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    type: "resume_review" | "ats_report" | "career_advice" | "job_match";
    status: "failed" | "completed" | "processing";
    userName: string;
    creditsUsed: number;
    score?: number | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    type: "resume_review" | "ats_report" | "career_advice" | "job_match";
    status: "failed" | "completed" | "processing";
    userName: string;
    creditsUsed: number;
    score?: number | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    type: "resume_review" | "ats_report" | "career_advice" | "job_match";
    status: "failed" | "completed" | "processing";
    userName: string;
    creditsUsed: number;
    score?: number | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    type: "resume_review" | "ats_report" | "career_advice" | "job_match";
    status: "failed" | "completed" | "processing";
    userName: string;
    creditsUsed: number;
    score?: number | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const PromptTemplateModel: mongoose.Model<{
    type: string;
    name: string;
    status: "active" | "inactive";
    template: string;
    variables: string[];
    usageCount: number;
    lastUsed: string;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    type: string;
    name: string;
    status: "active" | "inactive";
    template: string;
    variables: string[];
    usageCount: number;
    lastUsed: string;
} & mongoose.DefaultTimestampProps, {
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
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    type: string;
    name: string;
    status: "active" | "inactive";
    template: string;
    variables: string[];
    usageCount: number;
    lastUsed: string;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    type: string;
    name: string;
    status: "active" | "inactive";
    template: string;
    variables: string[];
    usageCount: number;
    lastUsed: string;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    type: string;
    name: string;
    status: "active" | "inactive";
    template: string;
    variables: string[];
    usageCount: number;
    lastUsed: string;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    type: string;
    name: string;
    status: "active" | "inactive";
    template: string;
    variables: string[];
    usageCount: number;
    lastUsed: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    type: string;
    name: string;
    status: "active" | "inactive";
    template: string;
    variables: string[];
    usageCount: number;
    lastUsed: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=model.d.ts.map