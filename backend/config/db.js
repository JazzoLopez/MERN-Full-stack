import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({
    path: './backend/.env'
})

const db = async () => {
    try{
        const connection = await mongoose.connect(process.env.URL_DB)
        const url = `${connection.connection.host} : ${connection.connection.port}`

        console.log(`MongoDB conectado en ${url}`)
    } catch(err){
        console.log(`Error: ${err.message}`);
        process.exit(1);
    }
}

export default db