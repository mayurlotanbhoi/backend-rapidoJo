"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIController = void 0;
const ai_service_1 = require("../service/ai.service");
const service = new ai_service_1.AIService();
class AIController {
    async createSession(req, res) {
        const response = await service.createSession(req.body);
        return res.status(201).json(response);
    }
    async listSessions(req, res) {
        const response = await service.listSessions();
        return res.status(200).json(response);
    }
    async createTemplate(req, res) {
        const response = await service.createTemplate(req.body);
        return res.status(201).json(response);
    }
    async listTemplates(req, res) {
        const response = await service.listTemplates();
        return res.status(200).json(response);
    }
    async updateTemplate(req, res) {
        const response = await service.updateTemplate(req.params.id, req.body);
        return res.status(200).json(response);
    }
}
exports.AIController = AIController;
//# sourceMappingURL=ai.controller.js.map