import express from "express";
import app from "../app";
import * as NotesController from "../controllers/notes";

const router = express.Router();

router.get("/", NotesController.getNotes);

export default router;