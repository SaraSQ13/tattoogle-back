import { Schema, model } from "mongoose";

const StyleSchema = new Schema({
  style: {
    type: String,
    required: true,
  },
});

const Style = model("Style", StyleSchema);

export default Style;
