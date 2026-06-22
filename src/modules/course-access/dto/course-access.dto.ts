export interface CourseAccessDto {
  email: string;
  courseId: string;
  driveFolderId: string;
  accessStatus?: "pending" | "granted" | "revoked" | "failed";
}
