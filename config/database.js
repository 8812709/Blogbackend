const mongoose=require('mongoose')
//using it to get the url of db
require("dotenv").config()

exports.dbConnect=()=>{
    
        mongoose.connect(process.env.DATABASE_URL)
        .then(()=>{console.log("The database is connected successfully")})
        .catch((e)=>{console.log(e)
            process.exit()
        })
         
}