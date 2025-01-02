//importing the models 
const Post=require("../models/postModel")
const Like=require("../models/likeModel")


//defining the logic for liking the post 

//in request i will have post id which i want to like and the user name who will like it 
exports.toLike=async(req,res)=>{
    try{
         //fetch the details from the request
    const {user,post}=req.body
    //make a new object of Like which will save the info in like
    const liked=new Like({user,post})
    const savedLike=await liked.save()
    //making sure it also update the array in the post schema db so that that i can know how many liked my post
    const updatedPost=await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true})
    res.status(200).json({
        success:true,
        postdata:updatedPost,
        likesdata:savedLike
        
    })

    }
    catch(e){
        console.error(e)
        res.json({
            success:false,
            message:"Internal server error"
        })
    }
   
}
//to unlike i just took the like id and post id and deleted the like id from like schema db and updated the post schema db by pulling the id
exports.toUnlike=async(req,res)=>{
    try{
    //fetching the post id and like id 
    const{post,likeId}=req.body

    const deletedLike=await Like.findOneAndDelete({post:post,_id:likeId},{new:true})
    const updatedPost=await Post.findByIdAndUpdate(post,{$pull:{likes:likeId}},{new:true})
    res.status(200).json({
        sucess:true,
        postinfo:updatedPost,
        deletedInfo:deletedLike
    })
    }
    catch(e){
        console.error(e)
        res.json({
            success:false,
            message:"Internal server error"
        })
    }
    
}