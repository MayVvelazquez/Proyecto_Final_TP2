import { Router } from "express";
import TagController from "../controller/TagController.js";
const tagRoutes = Router();
const tagController = new TagController();

tagRoutes.get('/', tagController.getAllTags);


export default tagRoutes;