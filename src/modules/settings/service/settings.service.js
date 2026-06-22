"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsService = void 0;
const api_response_1 = require("../../../shared/response/api-response");
const settings_repository_1 = require("../repository/settings.repository");
class SettingsService {
    repository = new settings_repository_1.SettingsRepository();
    async get() {
        const settings = await this.repository.get();
        return new api_response_1.ApiResponse(true, "Settings fetched successfully", settings);
    }
    async update(payload) {
        const settings = await this.repository.update(payload);
        return new api_response_1.ApiResponse(true, "Settings updated successfully", settings);
    }
}
exports.SettingsService = SettingsService;
//# sourceMappingURL=settings.service.js.map