import { Sequelize } from "sequelize";
import { DB_PASSWORD} from "../config/config.js";

const connection = new Sequelize("proyectoapi","root",DB_PASSWORD,{
    host:'localhost',
    dialect: 'mysql',
    port:3306,
})

try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  
  
  export default connection;