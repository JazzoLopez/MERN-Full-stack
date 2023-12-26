import express from "express";
import dotenv from 'dotenv';
import userRoutes from "./routes/userRoutes.js";
dotenv.config({
    path: './.env'
})
import db from "./config/db.js";
db();

const app = express();

app.use(express.json());
//*ROUTING
app.use('/api/usuarios',userRoutes)

const port = process.env.SERVER_PORT || 4000

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: '${port}'`)
})