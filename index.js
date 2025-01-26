const express = require("express")
const app = express();
const Product = require("./models/product.model");
const mongoose = require("mongoose");
const productRoute = require("./routes/productAPI")
const db = require("./DB/dbConnect");


//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: false}))


//ROUTES
app.use('/api/products',productRoute)



//Server
app.listen(3000,() =>{
    console.log("server is running on port 3000")
});


