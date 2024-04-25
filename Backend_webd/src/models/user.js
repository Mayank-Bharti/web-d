// models/User.js
const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
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
});

const User =new mongoose.model('user', UserSchema);
module.exports = User;