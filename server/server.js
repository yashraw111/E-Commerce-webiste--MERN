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
const productRoutes = require('./routes/product.routes')
const SubCatController = require('./routes/subCategory.routes')
const User = require('./routes/user.routes')
const Cart = require("./routes/cart.routes")
const  AuthRoute = require('./routes/auth.route')
app.use('/category',CategoryRoutes)
app.use('/product',productRoutes)
// app.use('/api/user',User)
app.use("/api/auth",AuthRoute)
app.use('/api/subcat',SubCatController)
app.use('/api/cart',Cart)

app.listen(PORT,()=>{
    console.log(`Server running on port http://localhost:${PORT}`)
})