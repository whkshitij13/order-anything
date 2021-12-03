const mongoose = require('mongoose')

const productSchema=mongoose.Schema({
    _id:mongoose.Schema.types.ObjectId,
    Category_Name: String,
    Addresses: String
})

module.exports = mongoose.model('Product', productSchema);