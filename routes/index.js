import { Router } from "express";
const router = Router();

// GET home page
router.get("/", function (req, res, next) {
  return res.send("Bienvenido a mi aplicación de búsqueda de tatuadores");
});

export default router;
