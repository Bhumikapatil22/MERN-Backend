const express=require('express');
const router=express.Router();

const {comments}=require("../controllers/commentController");
const {likePost,unlikePost}=require("../controllers/likeController");
const{createPost,getAllPosts}=require("../controllers/postController");

router.post("/comments/create",comments);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);


module.exports = router;
