import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import errorHandler from "../utils/errorHandler";
import Users from "../model/user.model";
import Notes from "../model/note.model";

// create note
export const createNote = asyncHandler(async (req: Request, res: Response) => {
  const { userId } = req.user;
  const data = req.body;

  if (!userId) {
    throw new errorHandler("please pass user's id", 406);
  }

  if (!data) {
    throw new errorHandler("please enter all the required data", 406);
  }

  const note = await Notes.create({ userId: userId, ...data });

  res.status(200).json({
    message: "note successifuly created",
    data: note,
    status: "success",
    success: true,
  });
});

// get all notes
export const getAllNotes = asyncHandler(async (req: Request, res: Response) => {
  const { userId } = req.user;

  const notes = await Notes.find({ userId: userId });

  if (!notes) {
    throw new errorHandler("you do not have any notes", 404);
  }

  res.status(200).json({
    message: "notes fetched successfuly",
    data: notes,
    status: "success",
    success: true,
  });
});

// get specific note
export const specificNote = asyncHandler(
  async (req: Request, res: Response) => {
    const { userId } = req.user;
    const { id } = req.params;

    console.log("this is a specific note id", id);

    if (!id) {
      throw new errorHandler("please enter the note id", 406);
    }

    const note = await Notes.findOne({ _id: id });
    console.log(note);

    if (!note) {
      throw new errorHandler("not not found", 404);
    }

    res.status(200).json({
      message: "note fetchend successfuly",
      data: note,
      status: "success",
      success: true,
    });
  }
);

// update note
export const updateNote = asyncHandler(async (req: Request, res: Response) => {
  const { userId } = req.user;
  const noteId = req.params;
  const data = req.body;

  if (!noteId) {
    throw new errorHandler("please enter the note id", 406);
  }

  const note = await Notes.findOne({ _id: noteId, userID: userId });

  if (!note) {
    throw new errorHandler("not not found", 404);
  }

  if (data.title) note.title = data.title;
  if (data.note) note.note = data.note;

  const updatedNote = note.save({ validateModifiedOnly: true });

  res.status(200).json({
    message: "note fetchend successfuly",
    data: updatedNote,
    status: "success",
    success: true,
  });
});

// remove note
export const deleteNote = asyncHandler(async (req: Request, res: Response) => {
  const { userId } = req.user;
  const noteId = req.params;

  if (!noteId) {
    throw new errorHandler("please enter the note id ", 406);
  }

  const note = await Notes.findOneAndDelete({ _id: noteId, userId: userId });

  res.status(200).json({
    message: "note successfuly removed",
    data: note,
    status: "success",
    success: true,
  });
});
