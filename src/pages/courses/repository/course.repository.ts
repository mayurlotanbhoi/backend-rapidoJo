import { CreateCourseDto } from "../dto/create-course.dto";
import { CourseModel } from "../model/model";

export class CourseRepository {
  async create(data: CreateCourseDto) {
    return CourseModel.create(data);
  }

  async update(id: string, data: CreateCourseDto) {
    return CourseModel.findByIdAndUpdate(id, data, {
      returnDocument: "after",
      runValidators: true,
    });
  }

  async getCourses(page = 1, limit = 10, search = "") {
    const skip = (page - 1) * limit;

    const filter: any = {};

    if (search?.trim()) {
      filter.$or = [
        {
          title: { $regex: search, $options: "i" },
        },
        {
          instructorName: { $regex: search, $options: "i" },
        },
        {
          badge: { $regex: search, $options: "i" },
        },
        {
          level: { $regex: search, $options: "i" },
        },
      ];
    }

    const [courses, total] = await Promise.all([
      CourseModel.find(filter)
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 })
        .lean(),

      CourseModel.countDocuments(filter),
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

  async deleteCourse(id: string) {
    return CourseModel.findByIdAndDelete(id);
  }
}
