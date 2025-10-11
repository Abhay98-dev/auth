const express=require("express")
const router=express.Router()
const User=require("../module/user")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const protect= require("../middleware/verifyToken")
require("dotenv").config();

router.get("/",(req,res)=>{
    res.send("Auth Route")
})


router.post("/login",async(req,res)=>{
   data=req.body
   user=await User.findOne({name:data.name})
   if(!user){
    return res.status(400).send("User not found")
   }
   const isMatch = await bcrypt.compare(data.password , user.password)
   if(!isMatch){
    return res.status(400).send("Invalid Credentials")
   }
   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
   res.json({ token });

})

router.post("/register",async(req,res)=>{
   data=req.body
   user=new User({
    name:data.name,
    password:await bcrypt.hash(data.password, 10)
   })
   user.save()
   res.send("User Registered Successfully")
})

router.get("/profile",protect,(req,res)=>{
    res.send("WlC")
})

module.exports=router