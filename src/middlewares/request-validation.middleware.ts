import { Request, Response, NextFunction } from "express";
import { User } from "../interfaces/user.interface";

export function validateUserRequest(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const user = req.body as User;
  if (
    !user ||
    typeof user.name !== "string" ||
    typeof user.email !== "string"
  ) {
    res.status(400).json({ message: "Invalid user data" });
    return;
  }
  next();
}
