import type express from "express";

const logger = (req: express.Request, res: express.Response, next: Function): void => {
  const date = new Date();
  console.log(`LOG (${date.toLocaleTimeString()}): ${req.url}`);
  next();
};

export default logger;
