import "dotenv/config";

const SERVER_PROT = process.env.SERVER_PROT;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_DIALECT = process.env.DB_DIALEC;
const SECRET = process.env.SECRET;

export {
  SERVER_PROT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_DIALECT,
  SECRET,
};