import { Router } from "express";
import {
  getUserData,
  updateUserData,
  removeUserData,
} from "../controller/user.controller";
import authenticateUser from "../middleware/auth.middleware";

const userRouter = Router();

userRouter.get("/:id", authenticateUser, getUserData);
userRouter.put("/:id", authenticateUser, updateUserData);
userRouter.delete("/", authenticateUser, removeUserData);

export default userRouter;
