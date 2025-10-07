const express=require("express")
const app=express()
const authRouter=require("./Route/auth")

app.use(express.json())
express.urlencoded({extended:true})

app.get("/",(req,res)=>{
    res.send("Hello")
})


app.use("/auth",authRouter)

app.listen(3000)