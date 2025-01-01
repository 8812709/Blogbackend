const mongoose=require('mongoose')

//kis user ne comment kia and kya comment kia and kis blog pe comment kia(post id needed)

const commentSchema=mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },
    user:{
        type:String,
        required:true,
        maxlenth:30
    },
    body:{
        type:String,
        required:true,
        maxlenth:100
    }

})

module.exports=mongoose.model("Comment",commentSchema)