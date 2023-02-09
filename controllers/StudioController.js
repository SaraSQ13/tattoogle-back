import Studio from "../models/Studio.js";

const StudioController = {};

// Get all studios
StudioController.getAll = async (req, res) => {
  try {
    const studio = await Studio.find();

    return res.status(200).json({
      success: true,
      message: " Get all studios retrieved successfully",
      data: studio,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving studios",
      error: error.message,
    });
  }
};

// Get studio by name

StudioController.getByName = async (req, res) => {
  try {
    const studio = await Studio.findOne({ name: req.params.name });

    return res.status(200).json({
      success: true,
      message: "Get studio successfully",
      data: studio,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving studio",
      error: error.messag,
    });
  }
};

export default StudioController;
