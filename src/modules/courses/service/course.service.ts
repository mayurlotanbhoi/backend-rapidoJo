import courseRepository from "../repository/course.repository";

class CourseService {
  async createCourse(payload: any) {
    return await courseRepository.create(payload);
  }

  async getCourses() {
    return await courseRepository.findAll();
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
