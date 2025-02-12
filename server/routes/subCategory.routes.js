const router = require('express').Router()

const SubCatController = require('../controller/subCategory.controller')
router.post('/',SubCatController.index)
router.get('/',SubCatController.view)
router.delete('/:id',SubCatController.delete)
module.exports =router