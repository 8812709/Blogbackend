//this is to create and get the post in the server
const { json } = require('express')
const blogschema=require('../models/postschema')

//writing the logic for to create in the blogapp
exports.toCreateComment=async(req,res)=>{
    try{
        const {id}=req.params
        const newComment=req.body.comments
        const createCommentInfo=await blogschema.findByIdAndUpdate({_id:id},{$push:{comments:newComment}},{new:true})
        if(!createCommentInfo)
        {
            return res.status(404).json({
                success:false,
                message:"no data found with accosiated id"
            })
        }
        res.status(200).json({
            success:true,
            data:createCommentInfo,
            message:"The comment is updated successfully"
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
exports.toGetComments=async(req,res)=>{
    try{
        const {id}=req.params
        const postComment=await blogschema.findById(id)
        if(!postComment){
           return res.status(404).json({
                success:false,
                message:"data not found of the id"
            })
        }
        res.status(200).json({
            success:true,
            data:{comments:postComment.comments},
            message:`The comment of id:${id} is retrived successfully`
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