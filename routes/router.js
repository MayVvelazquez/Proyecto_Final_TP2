import { Router } from "express";
import roleRoutes from "./roleRoutes.js";

const router= Router();

router.use("/role", roleRoutes);


export default router;
