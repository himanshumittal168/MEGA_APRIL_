const mongoose=require("mongoose");
require("dotenv").config();
const dbConnect=()=>
{
    mongoose.connect(process.env.url)
    .then(()=>{console.log("CONNECTED TO DB")})
    .catch((err)=>{console.log("CANT CONNECT")})
}


module.exports=dbConnect;