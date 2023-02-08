import { Router } from "express";
const router = Router();

import UserController from "../controllers/UserController.js";
import isSuperAdmin from "../middlewares/isSuperAdmin.js";
import verifyToken from "../middlewares/verifyToken.js";

// GET users listing
router.get("/", verifyToken, isSuperAdmin, UserController.getAll);
router.get("/:name", UserController.getByName);

// Delete users
router.delete("/delete/:id", UserController.deleteById);

export default router;
