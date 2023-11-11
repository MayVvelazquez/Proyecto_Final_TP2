import User from "./User.js";
import Role from "./Role.js";
import Product from "./Product.js";
import Tag from "./Tag.js";
import ProductTags from "./ProductTags.js";

//Asociación entre Role y User (1:M)
Role.hasMany(User,{
    foreignKey:'roleId',
});

User.belongsTo(Role,{
    foreignKey:"roleId",
});

//Asociacion entre User y Producto (1:M)
User.hasMany(Product, {
    foreignKey: 'vendorId', 
});
Product.belongsTo(User, { 
    foreignKey: 'vendorId' 
});

//Asociacion entre Product y Tag (M:M)
Product.belongsToMany(Tag,{
    through: ProductTags, //Le decimos que pase por la columna ProductTags
    foreignKey: "productId"
});

Tag.belongsToMany(Product,{
    through: ProductTags,
    foreignKey: "tagId"
});

export {User, Role, Product,Tag, ProductTags};

