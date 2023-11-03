import { DataTypes as DT,Model } from "sequelize";
import connection from "../connection/connection.js";
import Role from "./Role.js";

class User extends Model{}
//es importante validar lo entrante por medio del 'validate'
User.init({
    nombre: {type:DT.STRING, validate:{
        require:true
    }},
    email:{type:String,require:true},
    role:{Role}
},{})