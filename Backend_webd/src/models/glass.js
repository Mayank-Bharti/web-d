const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    "Product Type": { type: String, required: true }, 
    Rating: { type: String, required: true },
    Image: { type: String, required: true },
    Price: { type: String, required: true }
});

const glass = mongoose.model('glass', productSchema);

module.exports = glass;
