export interface ApplicationDto {
  candidateName: string;
  candidateEmail?: string;
  jobTitle?: string;
  company?: string;
  appliedDate?: string;
  status?: "applied" | "screening" | "interview" | "selected" | "rejected";
  resumeUrl?: string;
  matchScore?: number;
}
