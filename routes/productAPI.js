const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const {getProducts,getProduct,AddProducts,UpdateProduct,DeleteProduct,DeleteProducts} = require('../Controllers/productControllers')

//FIND ALL PRODUCT
router.get("/", getProducts);

//FIND SINGLE PRODUCT
router.get("/:id", getProduct);

//ADD PRODUCTS
router.post("/", AddProducts);

//EDIT OR UPDATE

router.put("/:id",UpdateProduct);

//DELETE A PRODUCT

router.delete("/:id", DeleteProduct);

//DELETE ALL PRODUCTS
router.delete("/", DeleteProducts);



module.exports = router;