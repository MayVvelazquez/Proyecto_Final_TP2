import { Router } from "express";
const userRoutes = Router();
/* import User from "../Models/User.js"*/
import UserController from "../controller/UserController.js"
const userController = new UserController;

//Ver si lo hacemos por nombre o por id
roleRoutes.get("", userController.getAllUser);
roleRoutes.get("/:id", userController.getUserById);
roleRoutes.post("/", userController.createUser);
roleRoutes.put("/:id",userController.deleteUser);
roleRoutes.delete("/:id");


export default userRoutes;
