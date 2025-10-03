import express from "express";
import logger from "../middleware/logger";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", logger, (req, res) => {
  res.send("<code>API placeholder</code>");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
