import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({
        success: false,
        message: "No athorization token was found",
      });
    }

    const token = authorization.split(" ")[1];

    var decoded = jwt.verify(token, process.env.JWT_SECRET);

    //Pass data to the next function
    req.user_id = decoded.user_id;
    req.user_role = decoded.user_role;

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Invalid token",
      error: error?.message || error,
    });
  }
};

export default verifyToken;
