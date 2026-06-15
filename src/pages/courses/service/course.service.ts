import { CreateCourseDto } from "../dto/create-course.dto";
import { CourseRepository } from "../repository/course.repository";
import { paginateResponse } from "../../../shared/utils/paginate";
import { ApiResponse } from "../../../shared/response/api-response";

export class CourseService {
  private repository = new CourseRepository();

  async createCourse(payload: CreateCourseDto) {
    const course = await this.repository.create(payload);
    return course;
  }

  async updateCourse(id: string, payload: CreateCourseDto) {
    const course = await this.repository.update(id, payload);
    return course;
  }

  async getCourses(page = 1, limit = 10, search = "") {
    const { courses, total } = await this.repository.getCourses(
      page,
      limit,
      search,
    );

    return paginateResponse(
      courses,
      total,
      page,
      limit,
      courses.length == 0 ? "No Courses found" : "Courses fetched successfully",
    );
  }

  async deleteCourse(id: string) {
    const response = await this.repository.deleteCourse(id);
    return new ApiResponse(true, "Course delete successful", response);
  }
}
