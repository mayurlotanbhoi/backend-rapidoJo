export interface CreateCourseDTO {
    title: string;
    subtitle: string;
    instructorName: string;
    thumbnail: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    badge?: string;
    googleDriveFolderId: string;
    totalEnrollments?: number;
    totalDuration?: string;
    rating?: number;
    originalPrice: number;
    discountAmount?: number;
    finalAmount: number;
    isPublished?: boolean;
}
//# sourceMappingURL=create-course.dto.d.ts.map