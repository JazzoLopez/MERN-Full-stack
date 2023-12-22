import express from "express";
import dotenv from 'dotenv';
dotenv.config({
    path: './.env'
})
import db from "./config/db.js";
db();

const app = express();

const port = process.env.SERVER_PORT || 4000

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: '${port}'`)
})