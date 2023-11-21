import { Product, ProductTags, Tag, User } from "../Models/index.js";   //Desglozamos esto porque los productos van a necesitar estos

class ProductController {
    constructor() { }

    //Obtener todos los productos segun su user y tag 
    getAllProducts = async (req, res) => {
        try {
            const products = await Product.findAll({
                attributes: ["id", "name", "description", "stock", "price"], 
            });
            res.status(200).send({ success: true, message: "Todos los productos", data: products })
        } catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    };

    //Se obtiene un producto en especifico (Por ID) TERMINARLO, VINCULAR CON userId 
    getProductById = async (req, res) => {
        try {
            const { id } = req.params;
            const product = await Product.findOne({
                where: { id: id },
            });

            if (!product) {
               throw new Error()
            }
    
            res.status(200).send({ success: true, message: 'Producto encontrado', data: product });
        } catch (error) {
            res.status(500).send({ success: false, message: 'Producto/id no encontrados'});
        }
    };


    createProduct = async (req, res) => {
        try {       
            const { name, description, stock, price } = req.body;
            const product = await Product.create({ name, description, stock, price });
            console.log(product);
            res.status(200).send({ success: true, message: "Producto creado" });
        
          } catch (error) {
            console.log(error);
            res.status(500).send({ success: false, message: "Error al crear el producto" });
          }
        };
            

    //Actualiza producto
    updateProduct = async (req, res) => {
        try {
            const { id } = req.params;
            const { name, description, stock, price} = req.body;
            const product = await Product.findByPk(id); 
            if (!product) {
                return res.status(404).send({ success: false, message: 'Producto no encontrado' });
            }
            
            await product.update({ name, description, stock, price });

            res.status(200).send({ success: true, message: 'Producto actualizado', data: product });
        } catch (error) {
            console.error(error);
            res.status(500).send({ success: false, message: 'Error al actualizar el producto' });
        }
    };
    //Elimar producto
    deleteProduct = async (req, res) => {
        try {
            const { id } = req.params;

            const product = await Product.findByPk(id);
          
                await product.destroy();
              
                res.status(200).send({ success: true, message: 'Producto eliminado' });
                    
        } catch (error) {
            console.error(error);
            res.status(500).send({ success: false, message: 'Id no encontrado'});
        }
    };

};

export default ProductController;