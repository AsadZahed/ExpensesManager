import { InferSchemaType, model, Schema } from "mongoose";

//Schema for a single note to be stored in the DB. timestamps added through mongoose
const noteSchema = new Schema(
  {
    title: { type: String, required: true },
    text: { type: String },
  },
  { timestamps: true }
);

//Member function from Mongoose(InferSchemaType) will return inferred type of Note schema
type Note = InferSchemaType<typeof noteSchema>;

export default model<Note>("Note", noteSchema);
