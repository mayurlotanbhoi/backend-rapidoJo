import { formatDate, toAdminRow } from "../../../shared/utils/admin-format";
import { AISessionDto, PromptTemplateDto } from "../dto/ai.dto";
import { AISessionModel, PromptTemplateModel } from "../model/model";

const defaultTemplates = [
  {
    id: "resume-review",
    name: "Resume Review",
    type: "resume_review",
    template: "Analyze the following resume and identify actionable improvements.",
    variables: ["resume_text", "job_title"],
    usageCount: 0,
    lastUsed: "",
    status: "active",
  },
  {
    id: "ats-score",
    name: "ATS Score",
    type: "ats_report",
    template: "Calculate ATS compatibility for this resume and job description.",
    variables: ["resume_text", "job_description"],
    usageCount: 0,
    lastUsed: "",
    status: "active",
  },
  {
    id: "job-match",
    name: "Job Match",
    type: "job_match",
    template: "Analyze compatibility between a candidate profile and job requirements.",
    variables: ["resume_text", "job_requirements"],
    usageCount: 0,
    lastUsed: "",
    status: "active",
  },
];

const normalizeSession = (row: any) => ({
  ...toAdminRow(row),
  createdAt: formatDate(row.createdAt),
});

const normalizeTemplate = (row: any) => ({
  ...toAdminRow(row),
  lastUsed: row.lastUsed || formatDate(row.updatedAt),
});

export class AIRepository {
  async createSession(payload: AISessionDto) {
    return AISessionModel.create(payload);
  }

  async listSessions() {
    const sessions = await AISessionModel.find().sort({ createdAt: -1 }).lean();
    return sessions.map(normalizeSession);
  }

  async createTemplate(payload: PromptTemplateDto) {
    return PromptTemplateModel.create(payload);
  }

  async listTemplates() {
    const templates = await PromptTemplateModel.find().sort({ createdAt: -1 }).lean();
    return templates.length ? templates.map(normalizeTemplate) : defaultTemplates;
  }

  async updateTemplate(id: string, payload: Partial<PromptTemplateDto>) {
    const template = await PromptTemplateModel.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    }).lean();

    return template ? normalizeTemplate(template) : null;
  }
}
