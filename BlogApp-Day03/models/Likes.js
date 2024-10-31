const mongoose=require("mongoose");

const likeSchema=new mongoose.Schema({
    noOfLikes:{
        type:Number,
        required:true
    },
    noOfUnlikes:{
        type:Number,
        required:true
    }
})
module.exports=mongoose.model("Likes",likeSchema);