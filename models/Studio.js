import { Schema, model } from "mongoose";

const StudioSchema = new Schema({
  studio_name: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    unique: true,
  },
});

const Studio = model("Studio", StudioSchema);

export default Studio;
