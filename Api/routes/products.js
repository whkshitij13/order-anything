const express = require('express');
const router= express.Router();
const bodyParser = require('body-parser');


bodyParser
router.get("/",(req,res,next)=>{
    res.status(200).json({
        message:"Hello"
    })
})

router.post("/",(req,res,next)=>{
    const Product= new Product({
        _id:mongoose.types.ObjectId(),
        Category_Name: req.body.Category_Name,
        Addresses: req.body.Addresses,
    });
})