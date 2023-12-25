import express from "express";
import dotenv from 'dotenv';
dotenv.config({
    path: './.env'
})
import db from "./config/db.js";
db();

const app = express();

//*ROUTING
app.get('/', (req, res) => {
    res.send('Hola desde el endpoint raiz')
})

const port = process.env.SERVER_PORT || 4000

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: '${port}'`)
})