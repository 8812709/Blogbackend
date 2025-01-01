const mongoose=require('mongoose')

//make the schema for likes
//konse post me like kia he(post id) and konse user ne like kia (username)
const likeSchema=mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post" //it will refer to the Post schema which is created in the model and
    },
    user:{
        type:String,
        require:true,
        maxlength:10
    }

})

module.exports=mongoose.model("Like",likeSchema)