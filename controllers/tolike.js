const blogschema=require("../models/postschema")

exports.toUpdateLike=async(req,res)=>{
    try{
        const {id}=req.params
        const post=await blogschema.findById(id)
        const updateInfo=await blogschema.findByIdAndUpdate({_id:id},{like:!post.like},{new:true})
        if(!updateInfo){
            res.status(404).json({
                success:false,
                data:"data not found",
                message:`post not found of this id:${id}`
            })
        }
        res.status(200).json({
            success:true,
            data:updateInfo,
            message:"The Like is updated"
        })
    }
    catch(e){
        console.error(e)
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
    
}

