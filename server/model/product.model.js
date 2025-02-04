const { default: mongoose } = require("mongoose");

 
const common = {
    type: String,
    required: true,
    trim: true
}

const ProductSchema = mongoose.Schema({
    CateGory: common,
    productName: common,
    description: common,   
    productPrice: {
        type: Number,
        required: true,
    },
    WithoutDiscountPrice: {
        type: Number, 
        required: true,
    },
    rate: {
        type: Number,
        required: true,
        min: 1,
        max: 5   
    },
    alreadySold: {
        type: Number,
        default: 0,   
        min: 0
    },
    available: {
        type: Number,
        required: true,
        min: 0
    },
    discount: {
        type: Number,
        required: true,
        min: 0,
        max: 100  
    },
    productImage: {
        type: String,
        required: true
    }
}, { timestamps: true })   
const Product = mongoose.model("Product", ProductSchema)

module.exports = Product
