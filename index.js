const express=require("express");
const mongoose=require("mongoose");
 const app=express();
 app.use(express.json());
app.get("/healthCheck",async(req,res)=>{
   try {
    res.send("health is okkkkkk")
   } catch (error) {
    res.send({message:error})
   }
})
app.listen(8082,()=>{
    console.log("listening at 8082")
})
