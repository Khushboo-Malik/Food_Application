const User=require("../models/user.js");
require("dotenv").config()
const axios=require("axios");

exports.userSignup=async(req,res)=>{
    try{
        const body=req.body;
        const user={
            Username:body.username,
            Email:body.email,
            Password:body.password,
            Address:body.address,
        }
        const result=await User.findOne({"Email":body.email});
        if(result){
            return res.status(400).json({message:"User already exists"});
        };
        if(!user.Username || !user.Email || !user.Password){
            return res.status(400).json({message:"Incomplete data provided"});
        }
        const user_info=await User.create(user);
        console.log("user: ",user);
        return res.status(200).json({message:"Signup completed successfully"});
    }catch(err){
        console.log(err);
        return res.status(500).json({message:"Internal server error"});
    }
}

exports.userLogin=async(req,res)=>{
    try{
        const body=req.body;
        if(!body.email || !body.password){
            return res.status(400).json({message:"Incomplete information provided"});
        }
        const result=await User.findOne({"Email":body.email});
        if(!result){
            return res.status(400).json({message:"No such user exists"});
        }
        if(result.Password==body.password){
            return res.status(200).json({message:"Login completed successfully"});
        }else{
            return res.status(400).json({message:"Incorrect Username/Password"});
        }
    }catch(err){
        console.log(err);
        return res.status(500).json({message:"Internal server error"});
    }
}