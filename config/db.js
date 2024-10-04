const mongoose=require("mongoose");
const connection=async()=>{
    try {
        console.log("connected")
        return mongoose.connect("mongodb://127.0.0.1:27017/blogapp2.0");
        
    } catch (error) {
        console.log(error)
    }
    
}
module.exports=connection;