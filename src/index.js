import dotenv from "dotenv"

import ConnectDB  from "./db/index.js"
console.log("MONGO_URL =", process.env.MONGO_URL);



dotenv.config({
    path: './env'
})

ConnectDB()

// const app = express ()
// ConnectDB ()


// (async () => {
//  try {
//     await mongoose.connect(`${process.env.MONGO_URL}/${DB_Name}`)
//     app.on("error",() => {
//         console.errore("errore",)

//     }) 

    
//  } catch (error) {
//     console.log(`ERROE WHILE CONNECTING TO DATEBASE`,error)
//     throw error
//  }
// })