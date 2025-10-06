import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import errorHandler from "../utils/errorHandler";
import Users from "../model/user.model";
import { hashPassword, verifyPassword } from "../utils/bcrypt.utils";
import { generateToken } from "../utils/jwt.utils";

// register new user
export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { password, ...data } = req.body;

    if (!password) {
      throw new errorHandler("Please enter your passsword", 406);
    }
    if (!data) {
      throw new errorHandler("Please enter all the required data", 406);
    }

    const hashedPassword = await hashPassword(password);

    const user = await Users.create({ password: hashedPassword, ...data });

    res.status(200).json({
      message: "user created successfuly",
      data: user,
      status: "success",
      success: true,
    });
  }
);

// log user
export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email) {
    throw new errorHandler("please enter your email", 406);
  }
  if (!password) {
    throw new errorHandler("please enter your password", 406);
  }

  const user = await Users.findOne({ email });

  if (!user) {
    throw new errorHandler("user does not exists", 404);
  }

  const validPassword = await verifyPassword(password, user.password);
  console.log(validPassword);
  if (!validPassword) {
    throw new errorHandler("either password or email is incorrect", 406);
  }

  const accessToken = generateToken({
    _id: user._id,
    full_name: user.full_name,
    email: user.email,
    password: user.password,
    birth: user.birth,
  });

  res.status(200).json({
    message: "user successfuly loged in",
    data: user,
    status: "success",
    success: true,
    accessToken,
  });
});
