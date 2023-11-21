import { Router } from "express";  
import ProductController from "../controller/ProductController.js";
import validateProducto from "../middleware/validateProduct.js"
const productRoutes = Router();
const productController=new ProductController()

productRoutes.get("", productController.getAllProducts);
productRoutes.get("/:id", productController.getProductById);
productRoutes.post("/", validateProducto, productController.createProduct);
productRoutes.put("/:id",validateProducto,productController.updateProduct);
productRoutes.delete("/:id", productController.deleteProduct);

export default productRoutes;