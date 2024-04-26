// models/User.js
const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
// const WishlistItemSchema = new mongoose.Schema({
//     productName: { type: String, required: true }, // Change to name
//     productImage: { type: String, required: true },
//     // totalPrice: { type: Number, required: true },
//     // Add more fields for wishlist item as needed
// });

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    pincode: { type: String, required: true },
    countryCode: { type: Number, required: true, unique: true },
    phone: { type: Number, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    paymentMethod: { type: String, required: true },
    orderPlacedAt: { type: Date, default: Date.now },
    // wishlistItems: [WishlistItemSchema], // Array of WishlistItemSchema
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
