import mongoose from "mongoose"

const productSchema=mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    }
})
export const productModel=mongoose.model('product',productSchema)