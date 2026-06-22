"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyService = void 0;
const api_response_1 = require("../../../shared/response/api-response");
const admin_format_1 = require("../../../shared/utils/admin-format");
const company_repository_1 = require("../repository/company.repository");
class CompanyService {
    repository = new company_repository_1.CompanyRepository();
    async create(payload) {
        const company = await this.repository.create(payload);
        return new api_response_1.ApiResponse(true, "Company created successfully", (0, admin_format_1.toAdminRow)(company.toObject()));
    }
    async getCompanies(page = 1, limit = 25, search = "") {
        const companies = await this.repository.getCompanies(page, limit, search);
        return new api_response_1.ApiResponse(true, "Companies fetched successfully", companies);
    }
    async update(id, payload) {
        const company = await this.repository.update(id, payload);
        return new api_response_1.ApiResponse(true, "Company updated successfully", company ? (0, admin_format_1.toAdminRow)(company) : null);
    }
    async delete(id) {
        const company = await this.repository.delete(id);
        return new api_response_1.ApiResponse(true, "Company deleted successfully", company);
    }
}
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map