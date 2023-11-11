import { Router } from "express";
/* import User from "../Models/User.js"*/
import UserController from "../controller/UserController.js"
import { validateUser } from "../mildleares/validateUser.js";

const userController = new UserController;

const userRoutes = Router();

//Login
userRoutes.post("/", userController.createUser);
userRoutes.post("/login", userController.login);

//Validacion persona real
userRoutes.get("/me", validateUser, userController.me);
userRoutes.use(validateUser);

//Ver si lo hacemos por nombre o por id
userRoutes.get("", userController.getAllUser);
userRoutes.get("/:id", userController.getUserById);
userRoutes.put("/:id", userController.updateUser);
userRoutes.delete("/:id", userController.deleteUser);




export default userRoutes;
