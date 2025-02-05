const router = require("express").Router()
const UserController = require('../controller/user.controller')
router.post('/SignUp',UserController.createUser)
router.post('/login',UserController.login)

module.exports = router