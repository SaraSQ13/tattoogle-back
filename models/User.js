import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: /.+\@.+\..+/,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: {
    type: String,
    enum: ["user", "super_admin"],
    default: "user",
  },
  tattoers: {
    type: Array,
    default: [],
  },
  tattoo_studio: {
    type: Array,
    default: [],
  },
});

const User = model("User",UserSchema);

export default User;
