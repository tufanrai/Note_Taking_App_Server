"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const userRouter = (0, express_1.Router)();
userRouter.get("/", user_controller_1.getUserData);
userRouter.put("/:id", user_controller_1.updateUserData);
userRouter.delete("/", user_controller_1.removeUserData);
exports.default = userRouter;
//# sourceMappingURL=user.router.js.map