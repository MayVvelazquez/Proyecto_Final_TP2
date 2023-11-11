import { DataTypes as DT } from "sequelize";
import connection from "../connection/connection.js";

//Define otra manera inicializar, conecta directo a la base de datos
const Tag = connection.define('Tag', {
    id:{
        type: DT.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: DT.STRING,
        allowNull: false,
        unique: true,
    },
},{
    timestamps:false,
});

export default Tag;