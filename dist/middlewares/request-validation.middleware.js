"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserRequest = validateUserRequest;
function validateUserRequest(req, res, next) {
    const user = req.body;
    if (!user ||
        typeof user.name !== "string" ||
        typeof user.email !== "string") {
        res.status(400).json({ message: "Invalid user data" });
        return;
    }
    next();
}
