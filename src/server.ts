import "dotenv/config";
import express from "express";
import cors from "cors";
import authRouter from "./router/auth.router";
import userRouter from "./router/user.router";
import noteRouter from "./router/note.router";
import dbConfig from "./config/database.config";
import { customError } from "./utils/errorHandler";

const port = process.env.PORT ?? 8000;
const uri = process.env.DB_URI ?? "";

const app = express();
dbConfig(uri);
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.urlencoded());
app.use(express.json());
app.use(customError);

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/notes", noteRouter);

app.listen(port, () => console.log(`server started on port: ${port}🚀`));
