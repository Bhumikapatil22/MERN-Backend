// Import models
const Post = require("../models/Posts");
const Comment = require("../models/Comments");

// Define route handler
exports.comments = async (req, res) => { 
    try {
        // Extract comments from request body
        const { post, user, body } = req.body;

        // Create a new comment object 
        const comment = new Comment({
            post, user, body
        });

        // Insert it in DB
        const savedComment = await comment.save();

        // Find the post by id and add the new comment to its comment array
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { comments: savedComment._id } },
            { new: true }
        )
            .populate("comments") // Populate the comments array with comment document
            .exec();

        res.json({
            post: updatedPost,
        });
    } catch (error) {
        return res.status(500).json({
            error: "Error while creating comment",
        });
    }
};
