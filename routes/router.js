import { Router } from "express";
import userRoutes from "./userRoutes.js";
import productRoutes from "./productRoutes.js";
import tagRoutes from "./tagRoutes.js";

const router= Router();

router.use("/user", userRoutes);
router.use("/product", productRoutes);
router.use("/tag",tagRoutes);

export default router;
