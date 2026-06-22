"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseRepository = void 0;
const model_1 = __importDefault(require("../model/model"));
class PurchaseRepository {
    async create(payload) {
        return model_1.default.create(payload);
    }
    async list(page = 1, limit = 25, search = "") {
        const skip = (page - 1) * limit;
        const filter = {};
        if (search.trim()) {
            filter.$or = [
                { transactionId: { $regex: search, $options: "i" } },
                { paymentStatus: { $regex: search, $options: "i" } },
            ];
        }
        const [rows, total] = await Promise.all([
            model_1.default.find(filter).skip(skip).limit(limit).sort({ purchasedAt: -1 }).lean(),
            model_1.default.countDocuments(filter),
        ]);
        return {
            rows,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            hasNext: page < Math.ceil(total / limit),
            hasPrev: page > 1,
        };
    }
    async update(id, payload) {
        return model_1.default.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
    }
    async delete(id) {
        return model_1.default.findByIdAndUpdate(id, { isDeleted: true, deletedAt: new Date() }, { new: true });
    }
}
exports.PurchaseRepository = PurchaseRepository;
//# sourceMappingURL=purchase.repository.js.map