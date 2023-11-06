import User from "./User";
import Role from "./Role";

//Asociación entre Role y User (1:N)
Role.hasMany(User,{
    foreignKey:'roleId',
})

User.belongsTo(Role,{
    foreignKey:"roleId",
});
export {User, Role};