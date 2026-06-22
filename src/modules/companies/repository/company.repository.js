"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyRepository = void 0;
const admin_format_1 = require("../../../shared/utils/admin-format");
const model_1 = __importDefault(require("../model/model"));
class CompanyRepository {
    async create(payload) {
        return model_1.default.create(payload);
    }
    async getCompanies(page = 1, limit = 25, search = "") {
        const skip = (page - 1) * limit;
        const filter = {};
        if (search.trim()) {
            filter.$or = [
                { name: { $regex: search, $options: "i" } },
                { industry: { $regex: search, $options: "i" } },
                { location: { $regex: search, $options: "i" } },
            ];
        }
        const [companies, total] = await Promise.all([
            model_1.default.find(filter).skip(skip).limit(limit).sort({ createdAt: -1 }).lean(),
            model_1.default.countDocuments(filter),
        ]);
        return (0, admin_format_1.listResponse)(companies.map(admin_format_1.toAdminRow), total, page, limit);
    }
    async update(id, payload) {
        return model_1.default.findByIdAndUpdate(id, payload, { new: true, runValidators: true }).lean();
    }
    async delete(id) {
        return model_1.default.findByIdAndUpdate(id, { isDeleted: true, deletedAt: new Date() }, { new: true });
    }
}
exports.CompanyRepository = CompanyRepository;
//# sourceMappingURL=company.repository.js.map