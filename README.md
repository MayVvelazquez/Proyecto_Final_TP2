Inicializar node: npm init -y

Inicializar Express: npm i express

Inicializar mysql2: npm i mysql2

Inicializar bcrypt: npm i bcrypt

Inicializar jsonwebtoken: npm i jsonwebtoken

Inicializar dotenv: npm i dotenv

Inicializar express-validator: npm i express-validator


app.use(express.json()); //middleware sirve para ver la info que me llega del cliente
app.use(express.urlencoded({extended:true})); //middleware para setear los datos de forma mas amigable

Paq cors para conectar con el frontend
