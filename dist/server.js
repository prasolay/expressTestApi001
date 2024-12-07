"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const request_validation_middleware_1 = require("./middlewares/request-validation.middleware");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.post('/users', request_validation_middleware_1.validateUserRequest, (req, res) => {
    // Process the validated user object
    // ...
    res.status(201).json({ message: 'User created successfully' });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
