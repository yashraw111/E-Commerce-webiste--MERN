const Category = require('../model/Category.model')

const CreateCategory = async(req,res)=>{
    try {
        const {cat_name}= req.body
        const res = await Category.create({cat_name})
        console.log(res)
        res.json({
            message: "Category created successfully",
            data: res
        })
        
    } catch (error) {
        console.log(error);
    }
}

const findCategory = async(req,res)=>{
   try {
     const data = await Category.find()
     res.json({Cat_data:data})
   } catch (error) {
    console.log(error);
    
   }
    // console.log(find);
}

const trashCat = async(req,res)=>{
    const {id } = req.params
    // console.log(id);

    const del = await Category.findByIdAndDelete(id)
    res.json({
        message: "Category deleted successfully",
        data: del
    })
    
}

module.exports = {
    CreateCategory,
    findCategory,
    trashCat
}