// models/Product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    "Product Type": { type: String }, // Changed from "productType" to "Product Type"
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String },
    image: { type: String, required: true },
    img1: { type: String },
    img2: { type: String },
    img3: { type: String },
    img4: { type: String },
    img5: { type: String }
    // Add more fields as per your product data model
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;
