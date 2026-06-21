export interface UserDto {
  name?: string;
  email?: string;
  mobile?: string;
  subscription?: "free" | "basic" | "premium" | "enterprise";
  applications?: number;
  resumeUploaded?: boolean;
  status?: "active" | "suspended" | "inactive";
  location?: string;
  skills?: string[];
  lastLogin?: string;
  role?: "JOB_SEEKER" | "RECRUITER" | "ADMIN";
}
