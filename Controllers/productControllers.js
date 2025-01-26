const Product = require("../models/product.model");


//FIND ALL PRODUCT
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//FIND SINGLE PRODUCT
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//ADD PRODUCTS
const AddProducts = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//UPDATE PRODUCT
const UpdateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//DELETE A PRODUCT
const DeleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id, req.body);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product was deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//DELETE ALL PRODUCT
const DeleteProducts = async (req, res) => {
  try {
    const product = await Product.deleteMany({});
    res.status(200).json({message: "Products deleted"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




module.exports = {getProducts,AddProducts,getProduct,UpdateProduct,DeleteProduct,DeleteProducts}
