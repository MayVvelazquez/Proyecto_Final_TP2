import { Product, ProductTags, Tag, User } from "../Models/index.js";   //Desglozamos esto porque los productos van a necesitar estos


class ProductController {
    constructor() { }

    //Obtener todos los productos segun su user y tag 
    getAllProducts = async (req, res) => {
        try {
            const products = await Product.findAll({
                attributes: ["id", "name", "description", "stock", "price"], 
                include: [
                    {
                        model: Tag,
                        attributes: ["name"], 
                        through: { attributes: ["productId", "tagId"] }, // Atributos de ProductTags
                    },
                    {
                        model: User,
                        as: "vendorId", 
                        attributes: ["id", "name", "email"], 
                    },
                ],
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
                include: {
                    model: User,
                    attributes: ['id', 'name', 'email'], 
                },
            });

            if (!product.dataValues) {
                return res.status(404).send({ success: false, message: 'Producto no encontrado' });
            }
    
            res.status(200).send({ success: true, message: 'Producto encontrado', userId });
        } catch (error) {
            res.status(500).send({ success: false, message: 'Error al obtener el producto', error: error.message });
        }
    };

    //Crear producto podriamos vincular un producto por el id de un user creado
    createProduct = async (req, res) => {
        try {
            const { name, description, stock, price } = req.body;
            console.log("Datos recibidos:", { name, description, stock, price });
            if (!name || !description || stock === undefined || price === undefined) {
                return res.status(400).send({ success: false, message: 'Faltan datos para crear el producto' });
            }
           /*  if (!name) {
                return res.status(400).send({ success: false, message: 'Faltan nombre' });
            }if (!description) {
                return res.status(400).send({ success: false, message: 'Faltan descripcion' });
            } if (!stock) {
                return res.status(400).send({ success: false, message: 'Faltan stock' });
            }else{
                return res.status(400).send({ success: false, message: 'Faltan precio' });
            }; */

            const product = await Product.create({ name, description, stock, price})
            console.log(product)
            res.status(201).send({ success: true, message: 'Producto creado', data: product });
        } catch (error) {
            console.error(error);
            res.status(500).send({ success: false, message: 'Error al crear el producto' });
        }
    };

    //Actualiza producto
    updateProduct = async (req, res) => {
        try {
            const { id } = req.params;
            const { name, description, stock, price} = req.body;
            const product = await Product.findByPk(id); //Busca si existe o no el producto por el id
            if (!product) {
                return res.status(404).send({ success: false, message: 'Producto no encontrado' });
            }
            // Actualizar los campos del producto
            await product.update({ name, description, stock, price });

            // Eliminar las relaciones actuales entre el producto y las etiquetas
            /* await ProductTags.destroy({ where: { productId: id } }); DESCOMENTAR POR SI LLEGAMOS HACER LA VINCULACION DE LOS TAGS*/

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

            if (!product) throw new Error('Producto no encontrado')/* {
                return res.status(404).send({ success: false, message: 'Producto no encontrado' });
            } */

            // Eliminar relacion con los tags antes de eliminar el producto
            /* await ProductTags.destroy({ where: { productId: id } }); */

            await product.destroy();

            res.status(200).send({ success: true, message: 'Producto eliminado' });
        } catch (error) {
            console.error(error);
            res.status(500).send({ success: false, message: 'Error al eliminar el producto' });
        }
    };

};

export default ProductController;