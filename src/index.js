import dotenv from "dotenv"

import ConnectDB  from "./db/index.js"
console.log("MONGO_URL =", process.env.MONGO_URL);



dotenv.config({
    path: './env'
})

ConnectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`server is running on port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("mongodb db connected in failed",err)
})

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