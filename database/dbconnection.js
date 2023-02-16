import mongoose from "mongoose"

export const dbconnection=()=>{
    mongoose.set('strictQuery',true)
    mongoose.connect('mongodb://127.0.0.1:27017/node_mongodb2').then(()=>{
    console.log("database connected :)")
}).catch((err)=>{
    console.log("database Error")
})
}