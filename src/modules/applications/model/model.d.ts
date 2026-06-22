import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    company: string;
    status: "rejected" | "applied" | "screening" | "interview" | "selected";
    candidateName: string;
    candidateEmail: string;
    jobTitle: string;
    appliedDate: string;
    resumeUrl: string;
    matchScore: number;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    company: string;
    status: "rejected" | "applied" | "screening" | "interview" | "selected";
    candidateName: string;
    candidateEmail: string;
    jobTitle: string;
    appliedDate: string;
    resumeUrl: string;
    matchScore: number;
} & mongoose.DefaultTimestampProps, {
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
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    company: string;
    status: "rejected" | "applied" | "screening" | "interview" | "selected";
    candidateName: string;
    candidateEmail: string;
    jobTitle: string;
    appliedDate: string;
    resumeUrl: string;
    matchScore: number;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    company: string;
    status: "rejected" | "applied" | "screening" | "interview" | "selected";
    candidateName: string;
    candidateEmail: string;
    jobTitle: string;
    appliedDate: string;
    resumeUrl: string;
    matchScore: number;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
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
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    company: string;
    status: "rejected" | "applied" | "screening" | "interview" | "selected";
    candidateName: string;
    candidateEmail: string;
    jobTitle: string;
    appliedDate: string;
    resumeUrl: string;
    matchScore: number;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    company: string;
    status: "rejected" | "applied" | "screening" | "interview" | "selected";
    candidateName: string;
    candidateEmail: string;
    jobTitle: string;
    appliedDate: string;
    resumeUrl: string;
    matchScore: number;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=model.d.ts.map