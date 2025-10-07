import { Router } from "express";
import {
  createNote,
  getAllNotes,
  specificNote,
  updateNote,
  deleteNote,
} from "../controller/notes.controller";
import authenticateUser from "../middleware/auth.middleware";

const noteRouter = Router();

noteRouter.post("/", authenticateUser, createNote);
noteRouter.get("/", authenticateUser, getAllNotes);
noteRouter.get("/:id", authenticateUser, specificNote);
noteRouter.put("/:id", authenticateUser, updateNote);
noteRouter.delete("/:id", authenticateUser, deleteNote);

export default noteRouter;
