const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, required: true, index: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  category: { type: String, required: true },
  image: { type: String },
});

module.exports = mongoose.model('product', productSchema);
