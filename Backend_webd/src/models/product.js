// models/Product.js

const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

const productSchema = new mongoose.Schema({
    "Product Type": { type: String, required: true },
    Brand: { type: String, required: true },
    Price: { type: Number, required: true },
    Image: { type: String, required: true },
    img1: { type: String },
    img2: { type: String },
    img3: { type: String },
    img4: { type: String },
    img5: { type: String }
 });
const Product = mongoose.model('product', productSchema);

module.exports = Product;
