//creating a instance to use router to navigate paths
const express=require("express")
const router=express.Router()


//importing the controller of the topost 
const {toGetPost,toCreatePost}=require('../controllers/toPost') 
const {toUpdateLike}=require("../controllers/tolike")
const {toCreateComment,toGetComments}=require("../controllers/tocomment")


//to make the api routes 


//to create a post and get the posts
router.get('/posts',toGetPost)
router.post('/posts/create',toCreatePost)


//to update the like just by toggle
router.put('/likes/like/:id',toUpdateLike)
router.put('/likes/unlike/:id',toUpdateLike)


//to create comments and get comments
router.put('/comments/create/:id',toCreateComment)
router.get('/comments/:id',toGetComments)

module.exports=router