import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export const errorHandlerMiddleware = (
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(500).json({ msg: err });
};
