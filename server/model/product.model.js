const { default: mongoose } = require("mongoose");
const common = {
    type:String,
    require:true,
    trim:true
}
const ProductSchema = mongoose.Schema({
    CateGory:common,
    productName:common,
    productPrice:{
        ...common,
        type:Number,
    },
    productImage:String
})

const Product = mongoose.model("Product",ProductSchema)

module.exports = Product