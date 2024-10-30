const mongoose=require("mongoose");

//whatever is present inside .env file will load in process object
require("dotenv").config();

const dbconnect=()=>{
     //fetching data from .env file
    mongoose.connect(process.env.DATABASE_URL,{
        useNewurlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("DB Connection sucessful"))
    .catch((error)=>
        { 
            console.log("Error in db connnection");
            console.error(error);
            process.exit(1);
        })
        
} 


module.exports=dbconnect;