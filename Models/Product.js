import { DataTypes as DT,Model } from "sequelize";
import connection from "../connection/connection.js";

class Product extends Model{};

Product.init({
    id:{
        type: DT.INTEGER,
        autoIncrement: true,
        primaryKey:true,
    },
    name: {
        type:DT.STRING, 
        allowNull:false, 
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
        type: DT.DECIMAL(9,2),
        allowNull: false,
        validate:{
            notEmpty: true,
            notNull: true,
       }
    }, 
},{ 
    sequelize:connection,
    modelName:"Product",
    timestamps: false,
});


export default Product;