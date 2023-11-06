import { DataTypes as DT,Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";

class User extends Model{
    async validatePassword(password){
        return await bcrypt.compare(password, this.password);
    }
}
//es importante validar lo entrante por medio del 'validate'
User.init({
    //ID aca o en role?
    id:{
        type: DT.INTEGER,
        autoIncrement: true,
    },
    nombre: {
        type:DT.STRING, 
        validate:{
            require:true
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
    password: {
        type: DT.STRING,
        allowNull: false
      },
    salt:{
        type: DT.STRING
      },
},{ 
    sequelize:connection,
    modelName:"User",
});

User.beforeCreate(async(user) =>{
    const salt = await bcrypt.genSalt();
    user.salt = salt;
    
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
});

export default User;