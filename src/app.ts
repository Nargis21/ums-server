import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  var test = "test";
  res.send("Hello World!");
});

export default app;
