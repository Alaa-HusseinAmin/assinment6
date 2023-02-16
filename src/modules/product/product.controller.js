import { productModel } from "../../../database/models/product.schema.js"

const getAllproduct=async(req, res) => {
    let products=await productModel.find().populate('createdBy')
 res.json({message:"success",products})
 }

 const getproduct=async(req, res) => {
    const {_id}=req.body
    let products=await productModel.findById({_id})
 res.json({message:"success",products})
 }

 const addproduct=async(req,res)=>{
    const {name,description,price,createdBy}=req.body
   await productModel.insertMany({name,description,price,createdBy})
   res.json({message:"success"})
}

const updateproduct=async(req,res)=>{
    const {_id,createdBy,name,description,price}=req.body
   let products =await productModel.findByIdAndUpdate({_id,createdBy},{name,description,price},{new:true})
   res.json({message:"success",products})
}

const deleteproduct=async(req,res)=>{
    const {_id,createdBy}=req.body
   await productModel.findByIdAndDelete({_id,createdBy})
   res.json({message:"success"})
}

export {
   getAllproduct,
   getproduct,
   addproduct,
   updateproduct,
   deleteproduct
}

