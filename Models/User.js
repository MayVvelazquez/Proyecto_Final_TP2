import { DataTypes as DT,Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";

class User extends Model{
   validatePassword = async (password) =>{
    const validate = await bcrypt.hash(password, this.salt);   
    return validate === this.password;
    }
};
//es importante validar lo entrante por medio del 'validate'
User.init({
    id:{
        type: DT.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type:DT.STRING, 
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    email: {
        type: DT.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        }
      },
    salt:{
        type: DT.STRING
    },
    password: {
        type: DT.STRING,
        allowNull: false
    },
},{ 
    sequelize:connection,
    modelName:"User",
    timestamps: false,
});

User.beforeCreate(async(user) =>{
    const salt = await bcrypt.genSalt();
    user.salt = salt;
    
    const hashPassword = await bcrypt.hash(user.password, salt);
    user.password = hashPassword;
});

export default User;