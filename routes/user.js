const express=require("express");
const router=express.Router();

const authAPI=require("../controllers/user.js");

router.post("/signup",authAPI.userSignup);

router.post("/login",authAPI.userLogin);

module.exports=router;