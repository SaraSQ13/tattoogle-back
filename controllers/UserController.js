import User from "../models/User.js";

const UserController = {};

// Get all users

UserController.getAll = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      success: true,
      message: "Get all users retrieved successfully",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving users",
      error: error.message,
    });
  }
};

// get user by name
UserController.getByName = async (req, res) => {
  try {
    const user = await User.findOne({ name: req.params.name });

    return res.status(200).json({
      succes: true,
      message: "Get user successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      message: "Error retrieving user",
      error: error.message,
    });
  }
};


export default UserController;