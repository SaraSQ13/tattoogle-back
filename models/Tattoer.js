import { Schema, model } from "mongoose";

const TattoerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    unique: true,
  },
});

const Tattoer = model("Tattoer", TattoerSchema);

export default Tattoer;
