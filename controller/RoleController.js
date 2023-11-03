import Role from "../Models/Role.js";  

class RoleController{
    constructor(){}

    getAllRole=async(req,res)=>{
        try {
            
        } catch (error) {}
    };
    getRoleById=async(req,res)=>{
        try {
            
        } catch (error) {}
    };
    createRole=async(req,res)=>{
        try {
            const{name} = req.body;
            const role = Role.create({name})
            console.log(role)
            res.status(200).send({success:true, message:"Role creado"});
            
        } catch (error) {
            error.message("Error al crear");
        }
    };
    updateRole=async(req,res)=>{
        try {
            
        } catch (error) {}
    };
    deleteRole=async(req,res)=>{
        try {
            
        } catch (error) {}
    };
}
export default RoleController;