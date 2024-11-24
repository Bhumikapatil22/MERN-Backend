import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


export const auth=(req,res,next)=>{
try {
    const token = req.body.token;

    if(!token)
    {
        return res.status(401).json({
            success:false,
            message:"token missing"
        });
    }

    //verify token
    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decode);

        req.user=decode;
    }
    catch(error)
    {
        return res.status(401).json({
            success:false,
            message:"Token is invalid"
        });
    }
next();


} catch (error) {
    return res.status(401).json({
        success:true,
        message:"Something went wrong while verifying the token"
    })
}
}


export const isStudent=(req,res,next)=>{
    try {
        
        if(req.user.role!=="Student")
        {
            return res.status(401).json({
                success:false,
                message:"This is protected route for student"
            });
        }
    next();
    }catch(error)
    {
        return res.status(500).json({
            success:false,
            message:"User role is not matching"
        })
    }
}

export const isAdmin=(req,res,next)=>{
    try {
        
        if(req.user.role!=="Admin")
        {
            return res.status(401).json({
                success:false,
                message:"This is protected route for Admin"
            });
        }
    next();
    }catch(error)
    {
        return res.status(500).json({
            success:false,
            message:"User role is not matching"
        })
    }
}