import express from "express";
import dotenv from 'dotenv';
dotenv.config({
    path: './.env'
})
import db from "./config/db.js";
db();

const app = express();

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Servidor corriendo en el puerto: '${process.env.SERVER_PORT}'`)
})