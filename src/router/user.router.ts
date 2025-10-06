import { Router } from "express";
import {
  getUserData,
  updateUserData,
  removeUserData,
} from "../controller/user.controller";

const userRouter = Router();

userRouter.get("/", getUserData);
userRouter.put("/update", updateUserData);
userRouter.delete("/", removeUserData);

export default userRouter;
