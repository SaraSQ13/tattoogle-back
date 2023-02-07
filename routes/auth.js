import { Router } from "express";
import AuthController from "../controllers/AuthController.js";

const router = Router();


// POST register & login
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/validate-token", AuthController.validateToken);

export default router; 