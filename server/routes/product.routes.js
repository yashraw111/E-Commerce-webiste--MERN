const router = require('express').Router()
const productController = require('../controller/product.controller')
router.post('/createPr',productController.createProduct)
router.get('/viewProduct',productController.viewProduct)
router.put('/updateProduct/:id',productController.updateProduct)
router.delete('/deleteProduct/:id',productController.deleteProduct)

module.exports = router