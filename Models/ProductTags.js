import { DataTypes as DT } from "sequelize";
import connection from '../connection/connection.js'
import { Product, Tag } from './index.js'

//Columna intermedia entre Productos y Tags 
const ProductTags = connection.define('ProductTags', {
    productId:{
        type: DT.INTEGER,
        primaryKey: true,
        references:{
            model: Product,
            key: 'id',
        }
    },
    tagId:{
        type: DT.INTEGER,
        primaryKey: true,
        references:{
            model: Tag,
            key: 'id',
        }
    },
},{
    timestamps: false
});

export default ProductTags;