import { ApiResponse } from "../../../shared/response/api-response";
import { CourseAccessDto } from "../dto/course-access.dto";
import CourseAccessModel from "../model/model";

export class CourseAccessService {
  async create(payload: CourseAccessDto) {
    const access = await CourseAccessModel.create(payload);
    return new ApiResponse(true, "Course access created successfully", access);
  }

  async grantAccess(payload: CourseAccessDto) {
    return new ApiResponse(true, "Access granted successfully", {
      ...payload,
      accessStatus: "granted",
    });
  }

  async revokeAccess(payload: CourseAccessDto) {
    return new ApiResponse(true, "Access revoked successfully", {
      ...payload,
      accessStatus: "revoked",
    });
  }
}
