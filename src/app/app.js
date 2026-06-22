"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const routes_1 = __importDefault(require("./routes"));
const error_handler_1 = require("../shared/middleware/error-handler");
const app = (0, express_1.default)();
const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://rapidojobs.com",
];
app.use((0, cors_1.default)({
    origin: allowedOrigins,
    credentials: true,
}));
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use((0, cookie_parser_1.default)());
app.use((0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    limit: 300,
    standardHeaders: true,
    legacyHeaders: false,
}));
app.use(express_1.default.json());
app.use(express_1.default.json());
app.use("/api/v1", routes_1.default);
app.get("/", (req, res) => {
    res.json("not found");
});
app.use(error_handler_1.errorHandler);
process.on("uncaughtException", (err) => {
    console.log("UNCAUGHT", err);
});
process.on("unhandledRejection", (err) => {
    console.log("UNHANDLED", err);
});
exports.default = app;
//# sourceMappingURL=app.js.map