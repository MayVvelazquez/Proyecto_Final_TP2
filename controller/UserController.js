import {User, Role} from "../Models/index.js";  

class UserController{
    constructor(){}

    //Obtener todos los usuario 
    getAllUser=async(req,res)=>{
        try {
            const users = await User.findAll({
                attributes: ["id","name"],
                include:[{model: Role, attributes:["name"]}],
            });
            res.status(200).send({success: true, message:"Todos los usuarios", data: users})
        } catch (error) {
            res.status(400).send({success: false, message:error.message})
        }
    };
    //Obtener el user por su id
    getUserById=async(req,res)=>{
        try {
            const {id} = req.params;
            const user = await User.findOne({
                where: {id},
                attributes:["id", "name", /* "email" */],
                include:[{model: Role, attributes:["name"]}],
            });
            if(!user) throw new Error ("No existe este usuario");
            res.status(200).send({success: true, message:"User obtenido:", data:user});
        } catch (error) {
            res.status(400).send({success: false, message:error.message});
        }
    };
    //Crear user 
    createUser=async(req,res)=>{
        try {
            const{name, email, password, roleId} = req.body;
            const user = User.create({name, email, password, roleId})
            console.log(user)
            if(!user) throw new Error("No se creo usuario");
            res.status(200).send({success:true, message:"User creado", data:user});
        } catch (error) {
            res.status(400).send({success:false, message:error.message});
        }
    };
    //Actualizar user
    updateUser=async(req,res)=>{
        try {
            const {id} = req.params;
            const {name, email, password, roleId} = reo.body;
            const user = await User.update({
                name, email, password, roleId
            },
            {where:{id},
        });
        res.status(200).send({success:true, message:"User modificado", data:user});
    } catch (error) {
        res.status(400).send({success:false, message:error.message});
    }
    };
    //Eliminar user
    deleteUser=async(req,res)=>{
        try {
            const {id} = req.params;
            const user = await User.destroy({
                where: { id },
            });
            res.status(200).send({success:true, message:"User eliminado", data:user});
        } catch (error) {
            res.status(400).send({success:false, message:error.message});
        }
    };


    //Login
    login = async (req, res) =>{
        try{
            const{email, password} = req.body;
            const user = await User.findOne({
              where: { email },
              include: [{ model: Role }],
            });
            if (!user) throw new Error("Usuario no encontrado");
            const validate = await user.validatePassword(password);
            if (!validate) throw new Error("Password incorrecta");
            const payload = {
              id: user.id,
              role: user.Role.dataValues.name,
            };
            const token = generateToken(payload);
            res.cookie("token", token);
      
            res.status(200).send({ success: true, message: "Usuario Logueado" });
        }catch(error){
            res.status(400).send({success:false, message:error.message});
        }
    };
    me= async (req, res) =>{
        try{
            const {user} = req;
            res.status(200).send({ success: true, message: "Operaciòn exitosa", data: user});
        }catch(error){
            res.status(400).send({ success: false, message: error.message });
    }
}}
export default UserController;