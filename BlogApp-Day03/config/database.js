const mongoose=require("mongoose");

require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(console.log("Db connected successfully"))
    .catch((error)=>{
        console.log("Connection failed");
        console.log(error);
        process.exit(1);
    })
}
module.exports=dbConnect;