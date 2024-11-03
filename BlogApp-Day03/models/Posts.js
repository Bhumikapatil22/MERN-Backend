const mongoose=require("mongoose");

//route handler
const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like", //reference to the like model
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment", //reference to the comment model
    }]
});

module.exports=mongoose.model("Post",postSchema);