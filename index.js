const express=require("express");
const mongoose=require("mongoose");
const Connect=require("./config/db");
require('dotenv').config();
 const app=express();
 app.use(express.json());
app.get("/healthCheck",async(req,res)=>{
   try {
    res.send("health is okkkkkk")
   } catch (error) {
    res.send({message:error})
   }
})
app.listen(8083,async()=>{
    try {
        await Connect();  // Wait for the connection and handle potential errors
        console.log("listening at 8082");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
})
