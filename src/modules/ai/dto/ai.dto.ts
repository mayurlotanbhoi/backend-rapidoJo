export interface AISessionDto {
  userName: string;
  type?: "resume_review" | "ats_report" | "career_advice" | "job_match";
  creditsUsed?: number;
  status?: "completed" | "processing" | "failed";
  score?: number;
}

export interface PromptTemplateDto {
  name: string;
  type?: string;
  template?: string;
  variables?: string[];
  usageCount?: number;
  lastUsed?: string;
  status?: "active" | "inactive";
}
