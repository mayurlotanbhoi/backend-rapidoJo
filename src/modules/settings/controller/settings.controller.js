"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsController = void 0;
const settings_service_1 = require("../service/settings.service");
const service = new settings_service_1.SettingsService();
class SettingsController {
    async get(req, res) {
        const response = await service.get();
        return res.status(200).json(response);
    }
    async update(req, res) {
        const response = await service.update(req.body);
        return res.status(200).json(response);
    }
}
exports.SettingsController = SettingsController;
//# sourceMappingURL=settings.controller.js.map