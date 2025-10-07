import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import errorHandler from "../utils/errorHandler";
import Users from "../model/user.model";

// get all the details of the user
export const getUserData = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    throw new errorHandler("please pass the user's id", 406);
  }

  const user = await Users.findOne({ _id: id });

  if (!user) {
    throw new errorHandler("user not found", 404);
  }

  res.status(200).json({
    message: "user's data found",
    data: user,
    status: "success",
    success: true,
  });
});

// update user's data
export const updateUserData = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params;
    const data = req.body;

    if (!id) {
      throw new errorHandler("please enter the user's id", 406);
    }

    const user = await Users.findById(id);

    if (!user) {
      throw new errorHandler("user not found", 404);
    }

    if (data.full_name) user.full_name = data.full_name;
    if (data.email) user.email = data.email;
    if (data.password) user.password = data.password;

    const updatedUser = user.save({ validateModifiedOnly: true });

    res.status(200).json({
      message: "user's data updated successfuly",
      data: updatedUser,
      status: "success",
      success: true,
    });
  }
);

// remove user's data
export const removeUserData = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params;

    if (!id) {
      throw new errorHandler("please enter the user's id", 406);
    }

    const user = await Users.findByIdAndDelete(id);

    if (!user) {
      throw new errorHandler("user does not exists", 404);
    }

    res.status(200).json({
      message: "user's data removed successfuly",
      data: user,
      status: "success",
      success: true,
    });
  }
);
