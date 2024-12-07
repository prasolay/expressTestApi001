import { Request, Response, NextFunction } from "express";
import { User } from "../interfaces/user.interface";

export function validateUserRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user = req.body as User;
  if (
    !user ||
    typeof user.name !== "string" ||
    typeof user.email !== "string"
  ) {
    return res.status(400).json({ message: "Invalid user data" });
  }
  next();
}
