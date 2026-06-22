"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIRepository = void 0;
const admin_format_1 = require("../../../shared/utils/admin-format");
const model_1 = require("../model/model");
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
const normalizeSession = (row) => ({
    ...(0, admin_format_1.toAdminRow)(row),
    createdAt: (0, admin_format_1.formatDate)(row.createdAt),
});
const normalizeTemplate = (row) => ({
    ...(0, admin_format_1.toAdminRow)(row),
    lastUsed: row.lastUsed || (0, admin_format_1.formatDate)(row.updatedAt),
});
class AIRepository {
    async createSession(payload) {
        return model_1.AISessionModel.create(payload);
    }
    async listSessions() {
        const sessions = await model_1.AISessionModel.find().sort({ createdAt: -1 }).lean();
        return sessions.map(normalizeSession);
    }
    async createTemplate(payload) {
        return model_1.PromptTemplateModel.create(payload);
    }
    async listTemplates() {
        const templates = await model_1.PromptTemplateModel.find().sort({ createdAt: -1 }).lean();
        return templates.length ? templates.map(normalizeTemplate) : defaultTemplates;
    }
    async updateTemplate(id, payload) {
        const template = await model_1.PromptTemplateModel.findByIdAndUpdate(id, payload, {
            new: true,
            runValidators: true,
        }).lean();
        return template ? normalizeTemplate(template) : null;
    }
}
exports.AIRepository = AIRepository;
//# sourceMappingURL=ai.repository.js.map