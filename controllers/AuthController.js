import { hashSync } from "bcrypt";
import User from "../models/User";

const AuthController = {};

AuthController.register = async (req, res) => {
  try {
    const { name, lastname, email, password } = req.body;

    //Password code validation
    if (password.length < 6) {
      return res.status(500).json({
        success: false,
        message: "Password is shorter than 6 characters",
      });
    }

    const encryptedPassword = hashSync(password, 10);

    const newUser = {
      name: name,
      lastname: lastname,
      email: email,
      password: encryptedPassword,
    };

    await User.create(newUser);

    return res.status(200).json({
      succes: true,
      message: " User created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating user",
      error: error?.message || error,
    });
  }
};
