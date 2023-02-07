import { compareSync, hashSync } from "bcrypt";
import User from "../models/User";
import jwt from "jsonwebtoken";

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

AuthController.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "email and password are required",
      });
    }
    const user = await User.findOne({ email: email });
    const isValidPassword = compareSync(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        message: "Bad credentials",
      });
    }

    const token = jwt.sign(
      { user_id: user._id, user_role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "20m" }
    );

    return res.status(200).json({
      success: true,
      message: `User Logged as ${user.role.toUpperCase()}`,
      token: token,
      user: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User login failed",
    });
  }
};

AuthController.validateToken = async (req, res) => {
  try {
    const { token } = req.body;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return res.json({ isValid: true, payload: decoded });
  } catch (error) {
    return res.json({ isValid: false });
  }
};

export default AuthController;
