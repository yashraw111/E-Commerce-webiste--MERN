const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3000
require('./config/db').main()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const cors = require('cors')
app.use(cors())

const CategoryRoutes = require('./routes/Category.routes')
app.use('/category',CategoryRoutes)
app.listen(PORT,()=>{
    console.log(`Server running on port http://localhost:${PORT}`)
})