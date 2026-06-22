import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import routes from "./routes";
import { errorHandler } from "../shared/middleware/error-handler";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://rapidojobs.com",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 300,
    standardHeaders: true,
    legacyHeaders: false,
  }),
);

app.use(express.json());

app.use(express.json());

app.use("/api/v1", routes);

app.get("/", (req, res) => {
  res.json("not found");
});
app.use(errorHandler);

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT", err);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED", err);
});

export default app;
