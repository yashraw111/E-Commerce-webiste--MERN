const express = require("express");
const { addToCart, getCart, removeFromCart,  } = require("../controller/cart.controller");
const router = express.Router();

router.post("/addToCart", addToCart);
router.get("/getCart/:userId", getCart);
router.post("/removeFromCart", removeFromCart);
module.exports = router;
