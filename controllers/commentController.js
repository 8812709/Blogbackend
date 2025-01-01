//importing the model
const Comment=require('../models/commentModel')
const Post=require('../models/postModel')

//making the logic for creating comments
//i have post id as request and username as request 
exports.toCreateComment=async(req,res)=>{
    try{
     //fetch the details from request 
    const {post,user,body}=req.body
    //make a new object of this in Comment
    const comment=new Comment({
        post,user,body
    })
    const savedComment=await comment.save()
    //i have to update the postschema db also by populating the comments inside it

    //at first it find the id of post in which i commented using post(here post=post_id) and then it pushes the savedcomment id into the post schema database and then using populate on comments it makes sure it returns all the information related with the id inside the comments and exec is used to execute it

    const updatedPost=await Post.findByIDAndUpdate(post,{$push:{comments:savedComment._id}},{new:true}).populate("comments").exec()
    res.status(200).json(
        {
            success:true,
            postdata:updatedPost,
            commentdata:savedComment,
            message:"The comment has been sent successfully"
        }
    )
    }
    catch(e)
    {
        console.error(e)
        res.status(500).json({
            success:false,
            message:"internal server error"
        }
        )
    }
    
}

//to get all the comments of a particular post 
exports.toGetComments=async(req,res)=>{
    //fetching the id of the post i want the comments for
    const {postid}=req.body
    //get request which will return all the details of a particular post 
    const CommentInfo=await Comment.findById({post:postid})
    res.status(200).json({
        success:true,
        commentdata:CommentInfo,
        message:`The comments of ${postid} has been fetched successfully`
    })
}