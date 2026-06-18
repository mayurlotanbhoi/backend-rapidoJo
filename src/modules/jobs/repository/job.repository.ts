import { CreateJobDto } from "../dto/create-job.dto";
import { JobModel } from "../model/model";

export class JobRepository {
  async create(data: CreateJobDto) {
    return JobModel.create(data);
  }
  async createMany(data: CreateJobDto[]) {
    return JobModel.insertMany(data);
  }
  async update(id: string, data: CreateJobDto) {
    return JobModel.findByIdAndUpdate(id, data, {
      returnDocument: "after",
      runValidators: true,
    });
  }
  async getJobs(page = 1, limit = 10, search = "") {
    const skip = (page - 1) * limit;

    const filter: any = {
      isDeleted: false,
    };

    // search filter
    if (search?.trim()) {
      filter.$or = [
        {
          title: {
            $regex: search,
            $options: "i",
          },
        },
        {
          company: {
            $regex: search,
            $options: "i",
          },
        },
        {
          location: {
            $regex: search,
            $options: "i",
          },
        },
        {
          skills: {
            $in: [new RegExp(search, "i")],
          },
        },
      ];
    }

    const [jobs, total] = await Promise.all([
      JobModel.find(filter)
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 })
        .lean(),

      JobModel.countDocuments(filter),
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

  async deleteJob(id: string) {
    return JobModel.findByIdAndUpdate(
      id,
      {
        isDeleted: true,
        deletedAt: new Date(),
      },
      {
        new: true,
      },
    );
  }
}
