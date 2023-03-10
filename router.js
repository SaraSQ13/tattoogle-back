import { Router } from "express";
const router = Router();

import indexRouter from "./routes/index.js";
import authRouter from "./routes/auth.js";
import usersRouter from "./routes/user.js";
import tattoerRouter from "./routes/tattoer.js";
import studioRouter from "./routes/studio.js"
import styleRouter from "./routes/style.js";

//routes
router.use("/", indexRouter);
router.use("/users", usersRouter);
router.use("/tattoers", tattoerRouter);
router.use("/studios", studioRouter);
router.use("/styles", styleRouter);

//auth
router.use("/auth", authRouter);

export default router;
