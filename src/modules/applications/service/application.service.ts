import { ApiResponse } from "../../../shared/response/api-response";
import { toAdminRow } from "../../../shared/utils/admin-format";
import { ApplicationDto } from "../dto/application.dto";
import { ApplicationRepository } from "../repository/application.repository";

export class ApplicationService {
  private repository = new ApplicationRepository();

  async create(payload: ApplicationDto) {
    const application: any = await this.repository.create(payload);
    return new ApiResponse(true, "Application created successfully", toAdminRow(application.toObject()));
  }

  async list() {
    const applications = await this.repository.list();
    return new ApiResponse(true, "Applications fetched successfully", applications);
  }

  async update(id: string, payload: Partial<ApplicationDto>) {
    const application = await this.repository.update(id, payload);
    return new ApiResponse(true, "Application updated successfully", application);
  }

  async delete(id: string) {
    const application = await this.repository.delete(id);
    return new ApiResponse(true, "Application deleted successfully", application);
  }
}
