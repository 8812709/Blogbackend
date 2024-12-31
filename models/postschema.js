const mongoose=require('mongoose')
const postschema=new mongoose.Schema({
    post:{
        type:String,
        required:true,
        maxlength:50
    },
    comments:{
        type:[String], //array of strings so that i can store multiple comments
        required:false,
        maxlength:500
    },
    like:{
        type:Boolean,
        required:true,
        default:false
    }
})
//exporting as blogschema 
module.exports = mongoose.model("blogschema", postschema);
