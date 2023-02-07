import { Router } from "express";
const router = Router();

import indexRouter from "./routes/index.js";
import authRouter from "./routes/auth.js";

//routes
router.use("/", indexRouter);

//auth
router.use("/auth", authRouter);

export default router;
