import { Router } from "express";
const router = Router();

import StudioController from "../controllers/StudioController.js";

// GET tattoers listing
router.get("/", StudioController.getAll);
router.get("/:name", StudioController.getByName);

export default router;
