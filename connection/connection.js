import { Sequelize } from "sequelize";
import { DB_USER, DB_NAME, DB_HOST, DB_PORT } from "../config/config.js";

const connection = new Sequelize(DB_NAME,DB_USER,"",{
    host:DB_HOST,
    dialect: "mysql",
    port:DB_PORT,
})

try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  
  
  export default connection;