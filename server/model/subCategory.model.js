const {Schema, model} = require('mongoose')
const subCateSchema = Schema({
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    subcategory: {
        type: String,
        required: true
    }
})

const SubCategory =model("subCategory",subCateSchema)

module.exports = SubCategory