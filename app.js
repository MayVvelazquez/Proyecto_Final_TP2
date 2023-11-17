import express from "express"
import connection from "./connection/connection.js"
import Role from "./Models/Role.js";//
import router from "./routes/router.js";
import { SERVER_PROT } from "./config/config.js";

/* console.log("🚀 ~ file: index.js:2 ~ express:", express) */
const app = express();

app.use(express.json()); //midlware sirve para ver la info que me llega del cliente
app.use(express.urlencoded({extended:true})); //midlware para setear los datos de forma mas amigable



//Instalar cors para conectar con el frontend

app.use("/api", router)


//El siguiente await es solo para desarrollo, cuando se pase a produccion se quita.
await connection.sync({ force: false}).then(() => {
    app.listen(SERVER_PROT, ()=>{
        console.log("El puerto 3000 se ejecuto con EXITO ")
    });
});

