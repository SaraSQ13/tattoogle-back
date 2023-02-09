import { Router } from "express";
const router = Router();

import StyleController from "../controllers/StyleController.js";

// GET tattoers listing
router.get("/", StyleController.getAll);
router.get("/:name", StyleController.getByName);

export default router;