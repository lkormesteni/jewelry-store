const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  price: Number,
  // Add other fields as needed
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
