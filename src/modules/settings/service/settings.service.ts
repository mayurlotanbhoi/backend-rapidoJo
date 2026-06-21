import { ApiResponse } from "../../../shared/response/api-response";
import { SettingsDto } from "../dto/settings.dto";
import { SettingsRepository } from "../repository/settings.repository";

export class SettingsService {
  private repository = new SettingsRepository();

  async get() {
    const settings = await this.repository.get();
    return new ApiResponse(true, "Settings fetched successfully", settings);
  }

  async update(payload: SettingsDto) {
    const settings = await this.repository.update(payload);
    return new ApiResponse(true, "Settings updated successfully", settings);
  }
}
