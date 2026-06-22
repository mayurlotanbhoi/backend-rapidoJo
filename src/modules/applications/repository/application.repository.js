"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationRepository = void 0;
const admin_format_1 = require("../../../shared/utils/admin-format");
const model_1 = __importDefault(require("../model/model"));
const normalizeApplication = (row) => ({
    ...(0, admin_format_1.toAdminRow)(row),
    appliedDate: row.appliedDate || (0, admin_format_1.formatDate)(row.createdAt),
});
class ApplicationRepository {
    async create(payload) {
        return model_1.default.create({
            ...payload,
            appliedDate: payload.appliedDate || (0, admin_format_1.formatDate)(new Date()),
        });
    }
    async list() {
        const applications = await model_1.default.find().sort({ createdAt: -1 }).lean();
        return applications.map(normalizeApplication);
    }
    async update(id, payload) {
        const application = await model_1.default.findByIdAndUpdate(id, payload, {
            new: true,
            runValidators: true,
        }).lean();
        return application ? normalizeApplication(application) : null;
    }
    async delete(id) {
        return model_1.default.findByIdAndDelete(id);
    }
}
exports.ApplicationRepository = ApplicationRepository;
//# sourceMappingURL=application.repository.js.map