import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes";
import { errorHandler } from "../shared/middleware/error-handler";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(express.json());

app.use(express.json());

app.use("/api/v1", routes);

app.get("/", (req, res) => {
  res.json("not found");
});
app.use(errorHandler);

export default app;
