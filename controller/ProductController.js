import {Product, ProductTags, Tag} from "../Models/index.js";   //Desglozamos esto porque los productos van a necesitar estos
import { Op } from "sequelize"; // Operadores para ayudar a construir consultas complejas.

class ProductController{
    constructor(){}

        //Obtener todos los productos 
        getAllProducts=async(req,res)=>{
            try {
                const products = await Product.findAll({
                    attributes: ["name","description", "stock", "prince"],
                    include:[{attributes:["name"]}],
                });
                res.status(200).send({success: true, message:"Todos los productos", data: products})
            } catch (error) {
                res.status(400).send({success: false, message:error.message})
            }
        };

        //Se obtiene un producto en especifico (Por ID)
        getProductById = async (req, res) =>{
            try {
                const {id} = req.params;
                const product = await Product.findOne({
                    where: {id},
                    attributes:["id", "name", "description", "stock", "prince"],
                    include:[{attributes:["name","description", "stock", "prince"]}], //Para que se utilizaria el include
                })
                res.status(200).send({success: true, message:"El producto", data: product})
            } catch (error) {
                res.status(400).send({success: false, message:error.message})
            }
        };

        //Crear producto
        createProduct=async(req,res)=>{
            try {
                const{name,description,stock,price} = req.body;
                const product = await Product.create({name,description,stock,price})
                console.log(product)
                res.status(200).send({success:true, message:"Producto creado"});
                
            } catch (error) {
                console.log(error)
                res.status(500).send({success: false, message: "Error al crear el producto" });
            }
        };

        //Actualiza producto
        updateProduct=async(req,res)=>{
            try {
                
            } catch (error) {}
        };

        //Elimar producto
        deleteProduct=async(req,res)=>{
            try {
                
            } catch (error) {}
        };
};

export default ProductController;