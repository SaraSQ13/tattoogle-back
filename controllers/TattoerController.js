import Tattoer from "../models/Tattoer.js";

const TattoerController = {};

// Get all tattoers
TattoerController.getAll = async (req, res) => {
  try {
    const tattoer = await Tattoer.find();

    return res.status(200).json({
      success: true,
      message: " Get all tattoers retrieved successfully",
      data: tattoer,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving tattoers",
      error: error.message,
    });
  }
};


// Get tattoer by name

TattoerController.getByName = async (req, res) => {
    try {
        const tattoer = await Tattoer.findOne({name: req.params.name});

        return res.status(200).json({
            success: true,
            message: "Get tattoer successfully",
            data: tattoer,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error retrieving tattoer",
            error: error.messag,
        });
    }
};

export default TattoerController;