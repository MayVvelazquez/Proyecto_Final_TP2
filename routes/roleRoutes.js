import { Router } from "express";
const roleRoutes= Router();
import Role from "../Models/Role.js"
import RoleController from "../controller/RoleController.js";
const roleController = new RoleController;

roleRoutes.get("", roleController.getAllRole);
roleRoutes.get("/:id", roleController.getRoleById);
roleRoutes.post("/", roleController.createRole);
roleRoutes.put("/:id",roleController.deleteRole);
roleRoutes.delete("/:id");


export default roleRoutes;
