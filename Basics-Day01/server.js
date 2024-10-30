const express =require('express');
const app=express();

///use to parse req.body in express->put or post
const bodyParser=require('body-parser');

//parse json data and add it to request.body
app.use(bodyParser.json())

app.listen(3000,()=>{
    console.log("server listening at 3000");
})

app.get('/',(req,res)=>{
    res.send("hello Guys");
})

app.post('/api/cars',(req,res)=>{
    const {name,brand}=req.body;
    console.log(name);
    console.log(brand);
    res.send("kaise ho Guys");
})

const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/myDataBase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Connection successful");
})
.catch((error)=>{
    console.log("Received an error");
})
