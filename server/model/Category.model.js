const {Schema, model} = require('mongoose')

const CategoryModel = Schema({
    cat_name:{
        type:String,
        required:true
    }
})

const category = model("Category", CategoryModel)

module.exports = category;