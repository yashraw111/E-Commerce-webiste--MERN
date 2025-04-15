const ProductSchema = require('../model/product.model')

// Create Product
const createProduct = async (req, res) => {
    // console.log(req.body)
    try {
        const { 
            productName, 
            WithoutDiscountPrice, 
            sub_category,
            CateGory, 
            productPrice, 
            productImage, 
            rate, 
            description, 
            alreadySold, 
            available, 
            discount 
        } = req.body

        const newProduct = await ProductSchema.create({
            productName, 
            WithoutDiscountPrice, 
            CateGory, 
            sub_category,
            productPrice, 
            productImage, 
            rate, 
            description, 
            alreadySold, 
            available, 
            discount 
        })
        console.log(newProduct)
        res.status(201).json({ message: 'Product created successfully', product: newProduct })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server Error: Could not create product' })
    }
}

 
const viewProduct = async (req, res) => {
    try {
        const products = await ProductSchema.find().populate("CateGory").populate("sub_category")
        res.status(200).json(products)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server Error: Could not fetch products' })
    }
}

 
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        console.log(req.body)

        const { 
            productName, 
            CateGory, 
            productPrice, 
            productImage, 
            WithoutDiscountPrice, 
            rate, 
            description, 
            alreadySold, 
            available, 
            discount 
        } = req.body

        const updatedProduct = await ProductSchema.findByIdAndUpdate(
            id, 
            { 
                productName, 
                CateGory, 
                productPrice, 
                productImage, 
                WithoutDiscountPrice, 
                rate, 
                description, 
                alreadySold, 
                available, 
                discount
            }, 
            { new: true }
        )

        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' })
        }

        res.status(200).json({ message: 'Product updated successfully', product: updatedProduct })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server Error: Could not update product' })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const deletedProduct = await ProductSchema.findByIdAndDelete(id)

        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' })
        }

        res.status(200).json({ message: 'Product deleted successfully' })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Server Error: Could not delete product' })
    }
}

module.exports = { createProduct, viewProduct, updateProduct, deleteProduct }
