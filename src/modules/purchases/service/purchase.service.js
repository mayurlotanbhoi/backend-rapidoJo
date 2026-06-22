"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseService = void 0;
const api_response_1 = require("../../../shared/response/api-response");
const purchase_repository_1 = require("../repository/purchase.repository");
class PurchaseService {
    repository = new purchase_repository_1.PurchaseRepository();
    async create(payload) {
        const purchase = await this.repository.create(payload);
        return new api_response_1.ApiResponse(true, "Purchase created successfully", purchase);
    }
    async list(page = 1, limit = 25, search = "") {
        const data = await this.repository.list(page, limit, search);
        return new api_response_1.ApiResponse(true, "Purchases fetched successfully", data.rows, data);
    }
    async update(id, payload) {
        const purchase = await this.repository.update(id, payload);
        return new api_response_1.ApiResponse(true, "Purchase updated successfully", purchase);
    }
    async delete(id) {
        const purchase = await this.repository.delete(id);
        return new api_response_1.ApiResponse(true, "Purchase deleted successfully", purchase);
    }
}
exports.PurchaseService = PurchaseService;
//# sourceMappingURL=purchase.service.js.map