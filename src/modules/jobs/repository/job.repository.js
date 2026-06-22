"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobRepository = void 0;
const model_1 = require("../model/model");
class JobRepository {
    async create(data) {
        return model_1.JobModel.create(data);
    }
    async createMany(data) {
        return model_1.JobModel.insertMany(data);
    }
    async update(id, data) {
        const { isDeleted, deletedAt, ...safeData } = data;
        return model_1.JobModel.findByIdAndUpdate(id, safeData, {
            returnDocument: "after",
            runValidators: true,
        });
    }
    async getJobs(page = 1, limit = 10, search = "") {
        const skip = (page - 1) * limit;
        const filter = {
            isDeleted: false,
        };
        if (search?.trim()) {
            const terms = search
                .split(/\s+/)
                .map((term) => term.trim())
                .filter(Boolean);
            const searchableFields = [
                "title",
                "company",
                "location",
                "skills",
                "source",
                "sourceUrl",
                "companyEmail",
                "description",
                "requirements",
                "benefits",
            ];
            filter.$and = terms.map((term) => ({
                $or: searchableFields.map((field) => ({
                    [field]: field === "skills"
                        ? { $in: [new RegExp(term, "i")] }
                        : { $regex: term, $options: "i" },
                })),
            }));
        }
        const [jobs, total] = await Promise.all([
            model_1.JobModel.find(filter)
                .skip(skip)
                .limit(limit)
                .sort({ createdAt: -1 })
                .lean(),
            model_1.JobModel.countDocuments(filter),
        ]);
        return {
            jobs,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            hasNext: page < Math.ceil(total / limit),
            hasPrev: page > 1,
        };
    }
    async deleteJob(id) {
        return model_1.JobModel.findByIdAndUpdate(id, {
            isDeleted: true,
            deletedAt: new Date(),
        }, {
            new: true,
        });
    }
}
exports.JobRepository = JobRepository;
//# sourceMappingURL=job.repository.js.map