import express from "express"
import connection from "./connection/connection.js"
/* console.log("🚀 ~ file: index.js:2 ~ express:", express) */



const app = express();
app.use(express.json()); //midlware sirve para ver la info que me llega del cliente
app.use(express.urlencoded({extended:true})); //midlware para setear los datos de forma mas amigable


await connection.sync({ force: false }).then(() => {
    app.listen(8080, ()=>{
        console.log("http://localhost:8080")
    });
});
