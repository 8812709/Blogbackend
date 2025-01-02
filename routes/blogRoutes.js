//creating a instance to use router to navigate paths
const express=require("express")
const router=express.Router()


//importing the controller of the topost 
const {toGetPost,toCreatePost}=require('../controllers/postController.js') 
const {toLike,toUnlike}=require("../controllers/likeController.js")
const {toCreateComment,toGetComments}=require("../controllers/commentController.js")

//to make the api routes 


//to create a post and get the posts
router.get('/posts',toGetPost)
router.post('/posts/create',toCreatePost)


//to update the like just by toggle
router.put('/likes/like',toLike)
router.put('/likes/unlike',toUnlike)


//to create comments and get comments
router.put('/comments/create',toCreateComment)
router.get('/comments',toGetComments)

module.exports=router
