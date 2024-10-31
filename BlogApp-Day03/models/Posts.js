const mongoose=require('mongoose');

const PostsSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50
        },
        description:{
            type:String,
            required:true,
            maxLength:50
        },
        image:{
            type:String,
            required:true,
            maxLength:50
        }
    }
)

module.exports= mongoose.model("Posts",PostsSchema);