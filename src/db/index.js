import mongoose from "mongoose"
import { DB_Name } from "../constaint.js"
const ConnectDB = async () => {
    try {
        const ConnectInstant=await mongoose.connect(`${process.env.MONGO_URL}/${DB_Name}`)
        console.log(`connected to datebase ${ConnectInstant.connection.host}`)

        
    } catch (error) {
        console.log(`Errore  in DB`,error)
        process.exit(1)
        
    }
}

export default ConnectDB 