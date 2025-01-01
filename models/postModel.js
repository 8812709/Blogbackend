//lets first make the instance of mongoose to make the schema
const mongoose=require("mongoose")

//we donot need to imoort otherschemas here it will be handled by mongoose

//lets make the schema for the post which will contains the title of blog(string) body of blog(string) a array of like and comment to store the info of it.

const postSchema=mongoose.Schema({
    user:{
        type:String,
        require:true,
        maxlength:10
    },
    title:{
        type:String,
        require:true,
        maxlength:20
    }
    ,body:{
        type:String,
        require:false,
        maxlength:40
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like"
    }],
    Comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }]
})

//lets export the schema
module.exports=mongoose.model("Post",postSchema)