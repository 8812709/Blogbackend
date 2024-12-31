//this is to create and get the post in the server
const blogschema=require('../models/postschema')

//writing the logic for to create in the blogapp
exports.toCreatePost=async(req,res)=>{
    try{
        const{post,comments}=req.body
        const createInfo=await blogschema.create({post,comments})
        res.status(200).json({
            success:true,
            data:createInfo,
            message:"The post is created successfully"
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
//to get the post data from the server
exports.toGetPost=async(req,res)=>{
    try{
        const allPostInfo=await blogschema.find({})
        res.status(200).json({
            success:true,
            data:allPostInfo,
            message:"all the posts are retrived successfully" 
        })
    }
    catch(e){
        console.error(e)
        res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}

