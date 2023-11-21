import { Router } from "express";
import UserController from "../controller/UserController.js"
import { validateUser } from "../middleware/validateUser.js";

const userController = new UserController;

const userRoutes = Router();


userRoutes.post("/", userController.createUser);
userRoutes.post("/login", userController.login);


userRoutes.get("/me", validateUser, userController.me);
userRoutes.use(validateUser);


userRoutes.get("", userController.getAllUser);
userRoutes.get("/:id", userController.getUserById);
userRoutes.put("/:id", userController.updateUser);
userRoutes.delete("/:id", userController.deleteUser);




export default userRoutes;
