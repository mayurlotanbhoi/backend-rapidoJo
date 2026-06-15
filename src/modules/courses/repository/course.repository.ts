import CourseModel from "../model/model";
import { CreateCourseDTO } from "../dto/create-course.dto";

export class CourseRepository {
  async create(payload: CreateCourseDTO) {
    return await CourseModel.create(payload);
  }

  async findAll() {
    return await CourseModel.find().sort({
      createdAt: -1,
    });
  }

  async findById(id: string) {
    return await CourseModel.findById(id);
  }

  async update(id: string, payload: Partial<CreateCourseDTO>) {
    return await CourseModel.findByIdAndUpdate(id, payload, { new: true });
  }

  async delete(id: string) {
    return await CourseModel.findByIdAndDelete(id);
  }
}

export default new CourseRepository();
