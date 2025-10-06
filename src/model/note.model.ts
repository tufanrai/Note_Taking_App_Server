import mongoose, { Schema, model } from "mongoose";

const NoteSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "please give a title to your note"],
      default: "Untitled",
    },
    note: {
      type: String,
      required: [true, "please enter the notes that you want to store"],
    },
    userId: {
      type: mongoose.Types.ObjectId,
      required: [true, "please enter the user's id"],
      ref: "user",
    },
  },
  { timestamps: true }
);

const Notes = model("note", NoteSchema);
export default Notes;
