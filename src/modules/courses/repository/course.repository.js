"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRepository = void 0;
const model_1 = __importDefault(require("../model/model"));
class CourseRepository {
    async create(payload) {
        return model_1.default.create(payload);
    }
    async findAll() {
        return await model_1.default.find().sort({
            createdAt: -1,
        });
    }
    async getCourses(page = 1, limit = 10, search = "") {
        const skip = (page - 1) * limit;
        const filter = {};
        if (search?.trim()) {
            filter.$or = [
                { title: { $regex: search, $options: "i" } },
                { instructorName: { $regex: search, $options: "i" } },
                { badge: { $regex: search, $options: "i" } },
            ];
        }
        const [courses, total] = await Promise.all([
            model_1.default.find(filter)
                .skip(skip)
                .limit(limit)
                .sort({ createdAt: -1 })
                .lean(),
            model_1.default.countDocuments(filter),
        ]);
        return {
            courses,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            hasNext: page < Math.ceil(total / limit),
            hasPrev: page > 1,
        };
    }
    async findById(id) {
        return await model_1.default.findById(id);
    }
    async update(id, payload) {
        return await model_1.default.findByIdAndUpdate(id, payload, { new: true });
    }
    async delete(id) {
        return await model_1.default.findByIdAndUpdate(id, { isDeleted: true, deletedAt: new Date() }, { new: true });
    }
}
exports.CourseRepository = CourseRepository;
exports.default = new CourseRepository();
//# sourceMappingURL=course.repository.js.map