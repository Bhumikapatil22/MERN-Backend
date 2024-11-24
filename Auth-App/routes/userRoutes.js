import express from "express";
const router=express.Router();

 import {signup,login} from "../controllers/Auth.js"
import { isStudent,isAdmin, auth } from "../middleware/auth.js";

router.post("/login", login);
router.post("/signup", signup);

//testing protected routes for single middleware
router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected route for tests"
    });
});

//protected route
router.get("/student",auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected route for Students"
    });
});

//protected route
router.get("/admin",auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected route for Admin"
    });
});



export default router;