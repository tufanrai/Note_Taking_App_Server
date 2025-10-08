"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const auth_middleware_1 = __importDefault(require("../middleware/auth.middleware"));
const userRouter = (0, express_1.Router)();
userRouter.get("/:id", auth_middleware_1.default, user_controller_1.getUserData);
userRouter.put("/:id", auth_middleware_1.default, user_controller_1.updateUserData);
userRouter.delete("/:id", auth_middleware_1.default, user_controller_1.removeUserData);
exports.default = userRouter;
//# sourceMappingURL=user.router.js.map