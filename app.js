import express from "express"
import connection from "./connection/connection.js"
/* console.log("🚀 ~ file: index.js:2 ~ express:", express) */



const app = express()

app.listen(8080, ()=>{

console.log("http://localhost:8080")
})