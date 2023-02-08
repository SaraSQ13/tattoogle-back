import { Router } from "express";
const router = Router();

import TattoerController from "../controllers/TattoerController.js";

// GET tattoers listing
router.get("/", TattoerController.getAll);
router.get("/:name", TattoerController.getByName);

export default router;
