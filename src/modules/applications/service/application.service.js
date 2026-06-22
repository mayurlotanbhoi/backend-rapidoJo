"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationService = void 0;
const api_response_1 = require("../../../shared/response/api-response");
const admin_format_1 = require("../../../shared/utils/admin-format");
const application_repository_1 = require("../repository/application.repository");
class ApplicationService {
    repository = new application_repository_1.ApplicationRepository();
    async create(payload) {
        const application = await this.repository.create(payload);
        return new api_response_1.ApiResponse(true, "Application created successfully", (0, admin_format_1.toAdminRow)(application.toObject()));
    }
    async list() {
        const applications = await this.repository.list();
        return new api_response_1.ApiResponse(true, "Applications fetched successfully", applications);
    }
    async update(id, payload) {
        const application = await this.repository.update(id, payload);
        return new api_response_1.ApiResponse(true, "Application updated successfully", application);
    }
    async delete(id) {
        const application = await this.repository.delete(id);
        return new api_response_1.ApiResponse(true, "Application deleted successfully", application);
    }
}
exports.ApplicationService = ApplicationService;
//# sourceMappingURL=application.service.js.map