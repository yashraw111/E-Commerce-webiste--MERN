const subCateModel = require('../model/subCategory.model')

exports.index = async(req,res)=>{
    console.log(req.body)
   try {
     const{category,subcategory}=req.body
     await subCateModel.create({category,subcategory})
   } catch (error) {
    console.log(error)
    
   }
}
exports.view = async(req,res)=>{
    const Cat = await subCateModel.find().populate('category')
    // console.log(Cat)
    res.json(Cat)
}
exports.delete= async(req,res)=>{
    const {id}=req.params
    console.log(id)
    const del = await subCateModel.findByIdAndDelete(id)
    res.json({
        message: "Subcategory deleted successfully",
        data: del
    })
}