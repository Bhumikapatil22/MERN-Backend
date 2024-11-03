const express = require('express');
const app = express();

require("dotenv").config();
const PORT=process.env.PORT||4000;

//middleware
app.use(express.json());

const blog=require("./routes/blogroutes");
app.use("/api/v1",blog);


const dbConnection=require("./config/database");
dbConnection();

app.listen(PORT,()=>{
    console.log(`app is running at post: ${PORT}`);
})

app.get("/",(req,res)=>{
res.send("This is home page");
})