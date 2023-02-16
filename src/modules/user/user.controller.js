import bcrypt from "bcrypt"
import { userModel } from "../../../database/models/user.schema.js"

const getAlluser=async(req, res) => {
    let users=await userModel.find()
 res.json({message:"success",users})
 }

 const getfullyname=async(req, res) => {
    const {name}=req.body
    let users=await userModel.find({ name: { $eq: name } })
 res.json({message:"success",users})
 }

 const signup=async(req,res)=>{
    const {name,email,password,age}=req.body
    let user = await userModel.findOne({email})
    if(user){
        res.json({message:"email in use"})
    }else{
        bcrypt.hash(password,8,async function(err,hash){
            await userModel.insertMany({name,email,age,password: hash})
            res.json({message:"success"})
        })
    }
}

const signin=async(req,res)=>{
    const {email,password}=req.body
    let user=await userModel.findOne({email})
    if(user){
        const match=await bcrypt.compare(password,user.password);

        if(match){
            res.json({message:"login",user:user._id})
        }else{
            res.json({message:"password incorrect"})
        }
    }else{
        res.json({message:"Account not found"})
    }
    }


const updateuser=async(req,res)=>{
    const {name,email,password,age,_id}=req.body
   let user =await userModel.findByIdAndUpdate({_id},{name,email,password,age},{new:true})
   res.json({message:"success",user})
}

const deleteuser=async(req,res)=>{
    const {_id}=req.body
   await userModel.findByIdAndDelete({_id})
   res.json({message:"success"})
}




// I used x,y as name and age


const getcontainX=async(req, res) => {
    const{name}=req.body
    let users=await userModel.find({ name: { $eq: name } })
 res.json({message:"success",users})
 }


// 
const getstartX=async(req, res) => {
    const {name,age}=req.body
    let users=await userModel.find({name:{$regex:`^${req.body.name}`}},{age: { $lt: age } })
    res.json({message:"success",users})
}
 
// 
const getendX=async(req, res) => {
    const {name}=req.body
    let users=await userModel.find({"name":/name$/})
    res.json({message:"success",users})
}
 


export {
    getAlluser,
    signup,
    signin,
    updateuser,
    deleteuser,
    getstartX,
    getcontainX,
    getendX,
    getfullyname
}

