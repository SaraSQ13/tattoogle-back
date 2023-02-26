import { Router } from "express";
const router = Router();

import UserController from "../controllers/UserController.js";
import isSuperAdmin from "../middlewares/isSuperAdmin.js";
import verifyToken from "../middlewares/verifyToken.js";

// GET users listing
router.get("/", verifyToken, isSuperAdmin, UserController.getAll);
router.get("/:name", verifyToken, UserController.getByName);

// Delete users
router.delete("/delete/:id", verifyToken, isSuperAdmin, UserController.deleteById);

//update users

export default router;
