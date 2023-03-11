import { RequestHandler } from "express";
import NoteModel from "../models/note";

//Returns all the notes stored in Notes collection.
export const getNotes: RequestHandler = async (req, res, next) => {
  try {
    const notes = await NoteModel.find().exec();
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};
