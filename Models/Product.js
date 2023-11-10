import { DataTypes as DT,Model } from "sequelize";
import connection from "../connection/connection.js";

class Product extends Model{};

Product.init({
    id:{
        type: DT.INTEGER,
        autoIncrement: true,
        unique:true,
    },
    name: {
        type:DT.STRING, 
        allowNull:false, //AllowNull si tiene permitido establecer un valor null
        validate:{
            notEmpty: true,
        }
    },
    description:{
        type: DT.STRING,
        allowNull: false
    },
    stock:{
        type: DT.INTEGER,
        allowNull: false
    },
    price:{
        type: DT.RANGE(DT.DECIMAL),
        allowNull: false,
        validate:{
            notEmpty: true,
            notNull: true,
        }
    },
    image:{
        type: DT.STRING,
        allowNull: false
    },
},{ 
    sequelize:connection,
    modelName:"Product",
});


export default Product;