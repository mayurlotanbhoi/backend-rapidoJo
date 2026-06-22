"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationController = void 0;
const application_service_1 = require("../service/application.service");
const service = new application_service_1.ApplicationService();
class ApplicationController {
    async create(req, res) {
        const response = await service.create(req.body);
        return res.status(201).json(response);
    }
    async list(req, res) {
        const response = await service.list();
        return res.status(200).json(response);
    }
    async update(req, res) {
        const response = await service.update(req.params.id, req.body);
        return res.status(200).json(response);
    }
    async delete(req, res) {
        const response = await service.delete(req.params.id);
        return res.status(200).json(response);
    }
}
exports.ApplicationController = ApplicationController;
//# sourceMappingURL=application.controller.js.map