import express from "express";
import cors from "cors";
import morgan from "morgan";
import baseRouter from "./routes/routes";

const app = express();
const port = 8080;
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1", baseRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
