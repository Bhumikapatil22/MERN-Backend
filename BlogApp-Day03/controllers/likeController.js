const { updateOne } = require("../models/Comments");
const Likes=require("../models/Likes");
const Post=require("../models/Posts");

exports.likePost=async(req,res) =>{
    try{
        const {post,user}=req.body;

        const like=new Likes({
            post,user,
        })

        const savedLikes=await like.save();

        // Find the post by id and add the new like to its like array
        const updatedPost=await Post.findByIdAndUpdate(
        post,{$push:{likes:savedLikes._id}},
        {new:true}
       )
       .populate("likes")
       .exec();

       res.json({
        post:updatedPost,
       })

    }
    catch(error)
    {
        return res.status(500).json({
            error: "Error while creating comment",
        });
    }
}

exports.unlikePost=async (req,res)=>{
    try{
        const {post,like}=req.body;

        //find and delete the like from collection
        const deletedLike=await Likes.findOneAndDelete({post:post,_id:like});

        //update the post collection
        const updatedPost=await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true});



        res.json({
            post:updatedPost,
        })
      
    }
    catch(error)
    {
        return res.status(500).json({
            error: "Error while creating comment",
        });
    }
}