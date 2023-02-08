import { Router } from "express";
const router = Router();

import indexRouter from "./routes/index.js";
import authRouter from "./routes/auth.js";
import usersRouter from "./routes/user.js";

//routes
router.use("/", indexRouter);
router.use("/users", usersRouter);

//auth
router.use("/auth", authRouter);

export default router;
