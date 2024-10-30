const Todo=require("../models/Todo");

exports.deleteTodo=async(req,res)=>{
    try{
        const id=req.params.id;
       
        await Todo.findByIdAndDelete(id);

        res.json({
            success:true,
            message:"Deleted successfully"
        })
    }

    catch(err)
    {
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server issue"
        })
    }
}