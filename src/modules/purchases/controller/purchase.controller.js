"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseController = void 0;
const purchase_service_1 = require("../service/purchase.service");
const service = new purchase_service_1.PurchaseService();
class PurchaseController {
    async create(req, res) {
        const response = await service.create(req.body);
        return res.status(201).json(response);
    }
    async list(req, res) {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 25;
        const search = String(req.query.search || "");
        const response = await service.list(page, limit, search);
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
exports.PurchaseController = PurchaseController;
//# sourceMappingURL=purchase.controller.js.map