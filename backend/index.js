const express=require('express');

require("dotenv").config();
const routes=require("./routes/routes");
const dbConnect=require("./config/database");


const app=express();
const port=process.env.port;
var cors = require("cors");


app.use(
    cors({
      origin: "*",
    })
  );
app.listen(port,()=>{
    console.log("SERVER IS ON")
})


dbConnect(); 
// MIDDLE WARE FOR PARSING THE REQUEST BODY
app.use(express.json());
app.use("/base",routes);

