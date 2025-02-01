const { default: mongoose } = require("mongoose");

const MONGODB_URL = "mongodb://localhost:27017/ecommerce-full-stack";

exports.main=()=>{
    mongoose.connect(MONGODB_URL)
    .then(()=>{
        console.log('db connected successfully')
    })
    .catch((err)=>{
        // console.error('error connecting to db',err)
    })

}