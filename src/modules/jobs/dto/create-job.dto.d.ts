export interface CreateJobDto {
    title?: string;
    company?: string;
    source?: string;
    sourceUrl?: string;
    location?: string;
    salaryMin?: number;
    salaryMax?: number;
    expMin?: number;
    expMax?: number;
    skills?: string;
    description?: string;
    requirements?: string;
    companyEmail?: string;
    postPhoto?: string;
    benefits?: string;
    status?: "active" | "inactive" | "expired" | "draft";
    applications?: number;
    remote?: boolean;
    hybrid?: boolean;
    isPremium?: boolean;
    isFeatured?: boolean;
    isUrgent?: boolean;
    isSponsored?: boolean;
    type?: string;
    isDeleted?: boolean;
}
//# sourceMappingURL=create-job.dto.d.ts.map