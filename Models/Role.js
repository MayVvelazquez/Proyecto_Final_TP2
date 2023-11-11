import { DataTypes as DT,Model } from "sequelize";
import connection from "../connection/connection.js";

class Role extends Model{};

Role.init({
    name:{
        type:DT.STRING,
        allowNull:false,
    },
},{
    sequelize:connection,
    modelName:"Role",
    timestamps: false,
   
});

export default Role;
