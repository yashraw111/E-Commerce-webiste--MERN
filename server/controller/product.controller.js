const ProductSchema = require('../model/product.model')

const createProduct = async(req,res)=>{
    console.log(req.body)
   try {
     const{productName,CateGory,productPrice,productImage}= req.body
     const newProduct =  await ProductSchema.create({productName,CateGory,productPrice,productImage})
   console.log(newProduct)
  
    } catch (error) {
    res.json({error:error})
    
   }
}

const viewProduct = async (req,res)=>{
    try {
        const product = await ProductSchema.find()
        res.json(product)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
}

const updateProduct = async(req,res)=>{
  try {
      const {id} = req.params
      console.log(req.body)
      const {productName,CateGory,productPrice,productImage}= req.body
  
      const updatePr = await ProductSchema.findByIdAndUpdate({_id:id},{productName,CateGory,productPrice,productImage})
  } catch (error) {
    console.log(error)
    
  }

}

const deleteProduct = async(req,res)=>{
    const {id} = req.params
    try {
        await ProductSchema.findByIdAndDelete(id)
        res.json({msg:'Product deleted'})
    } catch (error) {
        res.status(500).send('Server Error')
    }
}

module.exports = {createProduct,viewProduct,updateProduct,deleteProduct}