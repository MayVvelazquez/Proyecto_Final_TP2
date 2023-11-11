import { Tag } from "../Models/index.js";

class TagController{
    constructor(){}

    //Obtener todos los tags
    getAllTags = async (req, res) =>{
        console.log(req.query); //objeto que contiene la propiedad para cada parámetro de cadena de consulta en la ruta. 
        try {
            const tags = await Tag.findAll(
                {attributes:["name"]}
            );
            res.status(200).send({success: true, message:"Todos los tags", data: tags});
        } catch (error) {
            res.status(400).send({success: false, message: error.message});
        }
    }
};

export default TagController;