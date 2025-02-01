const router = require("express").Router()

const CategoryController = require('../controller/Category.controller')

router.post('/addCategory', CategoryController.CreateCategory)
router.get('/viewCategory', CategoryController.findCategory)
router.delete('/trashCat/:id', CategoryController.trashCat)

module.exports =router