import { Schema, model } from "mongoose";

const StudioSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    unique: true,
  },
});

const Studio = model("Tattoer", TattoerSchema);

export default Studio;
