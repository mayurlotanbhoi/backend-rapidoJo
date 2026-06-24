import CourseModel from "../model/model";
import { CreateCourseDTO } from "../dto/create-course.dto";

export class CourseRepository {
  async create(payload: CreateCourseDTO) {
    return CourseModel.create(payload);
  }

  async findAll() {
    return await CourseModel.find().sort({
      createdAt: -1,
    });
  }

  async getCourses(page = 1, limit = 10, search = "") {
    const skip = (page - 1) * limit;

    const filter: any = {};
    console.log(search);

    if (search?.trim()) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { instructorName: { $regex: search, $options: "i" } },
        { badge: { $regex: search, $options: "i" } },
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

  async findById(id: string) {
    return await CourseModel.findById(id);
  }

  async update(id: string, payload: Partial<CreateCourseDTO>) {
    return await CourseModel.findByIdAndUpdate(id, payload, { new: true });
  }

  async delete(id: string) {
    return await CourseModel.findByIdAndUpdate(
      id,
      { isDeleted: true, deletedAt: new Date() },
      { new: true },
    );
  }
}

export default new CourseRepository();
