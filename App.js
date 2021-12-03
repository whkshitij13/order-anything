const express = require('express');
const app= express();
const morgan= require('morgan');
const mongoose = require('mongoose')

const productRoutes= require("./Api/Routes/product")
const orderRoutes= require("./Api/Routes/order")


mongoose.connect('mongodb+srv://Kshitij_13:'+process.env.MONGO_ATLAS-PASSWORD+'@order-anything.0sp4b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

app.use(morgan('dev'));
app.use("/products", productRoutes)
app.use("/orders", orderRoutes)

module.exports=app;