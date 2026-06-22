"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PERMISSIONS = void 0;
const roles_1 = require("./roles");
exports.PERMISSIONS = {
    MANAGE_USERS: [roles_1.ROLES.SUPER_ADMIN, roles_1.ROLES.ADMIN],
    MANAGE_CONTENT: [roles_1.ROLES.SUPER_ADMIN, roles_1.ROLES.ADMIN],
    MANAGE_SETTINGS: [roles_1.ROLES.SUPER_ADMIN],
    VIEW_DASHBOARD: [roles_1.ROLES.SUPER_ADMIN, roles_1.ROLES.ADMIN],
};
//# sourceMappingURL=permissions.js.map