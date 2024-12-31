//creating the instance of the server 
const express=require('express')
const app=express()

//middleware,we are using it for parsing request from client side
app.use(express.json())

//importing the dotenv for port 
require('dotenv').config()
const PORT=process.env.PORT || 4000

//making the server online 
app.listen(PORT,()=>{
    console.log(`The server is online at ${PORT}`)
})

//lets import the routers here and by mouting we will use it
const toposts=require('./routes/toposts')
app.use("/api/v2",toposts) //mounted and used successfully

//importing db function and connecting it with the server by calling it
const {dbConnect}=require('./config/database')
dbConnect()






