import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    full_name: {
      type: String,
      required: [true, "please enter your full name"],
    },
    birth: {
      type: String,
      required: [true, "please enter your birth"],
    },
    email: {
      type: String,
      required: [true, "please entre your email"],
      unique: [true, "user with this email exists"],
    },
    password: {
      type: String,
      required: [true, "please enter passowrd"],
    },
  },
  { timestamps: true }
);

const Users = model("user", UserSchema);
export default Users;
