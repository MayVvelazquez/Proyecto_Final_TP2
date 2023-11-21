import express from "express"
import connection from "./connection/connection.js"
import router from "./routes/router.js";
import { SERVER_PORT } from "./config/config.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true})); 

app.use("/api", router)

await connection.sync({ force: false}).then(() => {
    app.listen(SERVER_PORT, ()=>{
        console.log("El puerto 3000 se ejecuto con EXITO ")
    });
});

