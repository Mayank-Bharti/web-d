// models/Product.js

const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

const productSchema = new mongoose.Schema({
    // "Product Type": { type: String,required:true }, // Changed from "productType" to "Product Type"
    // Brand: { type: String, required: true },
    // Price: { type: Number, required: true },
    // // category: { type: String },
    // Image: { type: String, required: true },
    // img1: { type: String,required:true },
    // img2: { type: String,required:true  },
    // img3: { type: String,required:true  },
    // img4: { type: String,required:true  },
    // img5: { type: String, required:true }
    // // Add more fields as per your product data model
    // const productSchema = new mongoose.Schema({
        name: { type: String, required: true },
        description: { type: String },
        price: { type: Number, required: true },
        category: { type: String },
        Image:{type:String},
    // Add more fields as per your product data model
 });
// });

const Product = mongoose.model('item', productSchema);

module.exports = Product;
