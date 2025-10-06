import { Router } from "express";
import {
  createNote,
  getAllNotes,
  specificNote,
  updateNote,
  deleteNote,
} from "../controller/notes.controller";

const noteRouter = Router();

noteRouter.post("/", createNote);
noteRouter.get("/", getAllNotes);
noteRouter.get("/:id", specificNote);
noteRouter.put("/:id", updateNote);
noteRouter.delete("/:id", deleteNote);

export default noteRouter;
