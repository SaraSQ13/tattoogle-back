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

//delete user by Id

UserController.deleteById = async (req, res) => {
  try {
    const deletedOne = await User.deleteOne({ _id: req.params.id });
    res.json({
      message: `${req.params.id} DELELTED`,
      data: deletedOne,
    });
  } catch (error) {
    res.status(500).send("internal error");
  }
};

// save tattoer by id at user panel
UserController.saveUserTattoers = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const tattoer = req.body;
    const match = user.tattoers.find((t) => t._id == tattoer._id);

    if (match) {
      res.json({
        message: "User already have this tattoer",
        inserted: false,
      });
    } else {
      const updatedUser = await User.updateOne(
        { _id: req.params.userId },
        { $push: { tattoer: req.body } }
      );
      res.json({
        message: "User tattoers updated successfully",
        data: updatedUser,
        inserted: true,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default UserController;
