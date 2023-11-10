import User from "./User.js";
import Role from "./Role.js";
import Product from "./Product.js";

//Asociación entre Role y User (1:N)
Role.hasMany(User,{
    foreignKey:'roleId',
})

User.belongsTo(Role,{
    foreignKey:"roleId",
});

//Asociacion entre User y Producto (1:N)
User.hasMany(Product, {
    foreignKey: 'vendorId' 
});
Product.belongsTo(User, { 
    foreignKey: 'vendorId' 
});

export {User, Role};
