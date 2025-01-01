//imoporting req modules
const Post=require("../models/postModel")


//making the function to define the logic for create post and get post

exports.toCreatePost=async(req,res)=>{
    try {
        //to fetch the data from the request 
        const {user,title,body}=req.body
        //to make changes in the db of postschema i created a object and then saved it 
        const post=new Post({user,title,body})
        const savedPost=await post.save()
        //getting the response 
        res.status(200).json({
            success:true,
            postInfo:savedPost,
            message:"The post is uploaded successfully"
        })
        
    } catch (e) {
        console.error(e)
        res.json({
            success:false,
            message:"Internal server error"
        })
    }
}

//to get posts 

exports.toGetPost=async(req,res)=>{
    try {
        //to make a get request which gives all the info
        const allPosts=await Post.find({}).populate("comments").populate("likes").exec()
        //getting the response 
        res.status(200).json({
            success:true,
            postInfo:allPosts,
            message:"All post data are fetched successfully"
        })
        
    } catch (e) {
        console.error(e)
        res.json({
            success:false,
            message:"Internal server error"
        })
    }

}