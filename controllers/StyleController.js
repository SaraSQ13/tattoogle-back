import Studio from "../models/Studio.js";

const StyleController = {};

// Get all style
StyleController.getAll = async (req, res) => {
  try {
    const style = await Studio.find();

    return res.status(200).json({
      success: true,
      message: " Get all styles retrieved successfully",
      data: style,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving style",
      error: error.message,
    });
  }
};

// Get style by name

StyleController.getByName = async (req, res) => {
  try {
    const style = await Studio.findOne({ style: req.params.style });

    return res.status(200).json({
      success: true,
      message: "Get style successfully",
      data: style,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving style",
      error: error.messag,
    });
  }
};

export default StyleController;
