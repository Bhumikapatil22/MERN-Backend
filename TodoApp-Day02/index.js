const express=require("express");
const app=express();

//load config from env file
require('dotenv').config();
const PORT=process.env.PORT||4000;

//middleware to parse json request body
app.use(express.json())

//import routes for Todo API
const todoRoutes=require('./routes/todos');

//mount todo api routes(updation in api will ne understood to old and new users due to custom info provided)
//for api url
app.use("/api/v1",todoRoutes);


//start server
app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`);
    console.log("server started");
})

//connect to the database
const dbConnect=require("./config/database");
dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send(`<h1>This is homepage</h1>`);
})



// const express=require("express");
// const app=express();

// app.listen(3000,()=>{
//     console.log("App listening at port 3000");
// })