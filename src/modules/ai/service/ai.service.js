"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIService = void 0;
const api_response_1 = require("../../../shared/response/api-response");
const admin_format_1 = require("../../../shared/utils/admin-format");
const ai_repository_1 = require("../repository/ai.repository");
class AIService {
    repository = new ai_repository_1.AIRepository();
    async createSession(payload) {
        const session = await this.repository.createSession(payload);
        return new api_response_1.ApiResponse(true, "AI session created successfully", (0, admin_format_1.toAdminRow)(session.toObject()));
    }
    async listSessions() {
        const sessions = await this.repository.listSessions();
        return new api_response_1.ApiResponse(true, "AI sessions fetched successfully", sessions);
    }
    async createTemplate(payload) {
        const template = await this.repository.createTemplate(payload);
        return new api_response_1.ApiResponse(true, "Prompt template created successfully", (0, admin_format_1.toAdminRow)(template.toObject()));
    }
    async listTemplates() {
        const templates = await this.repository.listTemplates();
        return new api_response_1.ApiResponse(true, "Prompt templates fetched successfully", templates);
    }
    async updateTemplate(id, payload) {
        const template = await this.repository.updateTemplate(id, payload);
        return new api_response_1.ApiResponse(true, "Prompt template updated successfully", template);
    }
}
exports.AIService = AIService;
//# sourceMappingURL=ai.service.js.map