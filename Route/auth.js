const express=require("express")
const router=express.Router()

router.get("/",(req,res)=>{
    res.send("Auth Route")
})

arr=["Abc","xyz","pqr"]
pass="12345"


router.post("/",(req,res)=>{
    user=req.body.name
    password=req.body.password
    if(arr.includes(user) && password==pass){
        res.send("Login Successful")
    }
    else{
        res.send("Login Failed")
    }
})

router.post("/register",(req,res)=>{
    user=req.body.name
    arr.push(user)
    res.send("User Registered")
})

module.exports=router