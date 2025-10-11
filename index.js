const express=require("express")
const app=express()
const authRouter=require("./Route/auth")
const mongoose=require("mongoose")
require("dotenv").config();
const cors = require("cors")

app.use(express.json())
express.urlencoded({extended:true})
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello")
})

mongoose.connect('mongodb://127.0.0.1:27017/auth')
  .then(() => console.log('Connected!'))
  .catch(err => console.log(err));


app.use("/auth",authRouter)

app.listen(3000)