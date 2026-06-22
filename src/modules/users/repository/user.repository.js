"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const admin_format_1 = require("../../../shared/utils/admin-format");
const model_1 = __importDefault(require("../model"));
const normalizeUser = (row) => ({
    ...(0, admin_format_1.toAdminRow)(row),
    registrationDate: (0, admin_format_1.formatDate)(row.createdAt),
    lastLogin: row.lastLogin || (0, admin_format_1.formatDate)(row.updatedAt),
});
class UserRepository {
    async create(payload) {
        return model_1.default.create(payload);
    }
    async getUsers(page = 1, limit = 25, search = "") {
        const skip = (page - 1) * limit;
        const filter = {};
        if (search.trim()) {
            filter.$or = [
                { name: { $regex: search, $options: "i" } },
                { email: { $regex: search, $options: "i" } },
                { mobile: { $regex: search, $options: "i" } },
                { location: { $regex: search, $options: "i" } },
            ];
        }
        const [users, total] = await Promise.all([
            model_1.default.find(filter).skip(skip).limit(limit).sort({ createdAt: -1 }).lean(),
            model_1.default.countDocuments(filter),
        ]);
        return (0, admin_format_1.listResponse)(users.map(normalizeUser), total, page, limit);
    }
    async update(id, payload) {
        const user = await model_1.default.findByIdAndUpdate(id, payload, {
            new: true,
            runValidators: true,
        }).lean();
        return user ? normalizeUser(user) : null;
    }
    async delete(id) {
        return model_1.default.findByIdAndUpdate(id, { isDeleted: true, deletedAt: new Date() }, { new: true });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map