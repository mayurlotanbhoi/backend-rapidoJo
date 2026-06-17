import { paginateResponse } from "../../../shared/utils/paginate";
import courseRepository from "../repository/course.repository";

class CourseService {
  async createCourse(payload: any) {
    const course = await courseRepository.create(payload);
    return course;
  }

  async getCourses(page = 1, limit = 10, search = "") {
    const { courses, total } = await courseRepository.getCourses(
      page,
      limit,
      search,
    );

    return paginateResponse(
      courses,
      total,
      page,
      limit,
      courses.length == 0 ? "No course found " : "course fetched successfully",
    );
  }

  async getCourseById(id: string) {
    return await courseRepository.findById(id);
  }

  async updateCourse(id: string, payload: any) {
    return await courseRepository.update(id, payload);
  }

  async deleteCourse(id: string) {
    return await courseRepository.delete(id);
  }
}

export default new CourseService();
