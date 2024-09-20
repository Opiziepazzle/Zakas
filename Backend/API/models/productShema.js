const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const productSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  name: {
    type: String,
    required: true,
    description: 'Name of the product.'
  },
  description: {
    type: String,
    required: true,
    description: 'Description of the product.'
  },
  price: {
    type: Number,
    required: true,
    description: 'Price of the product.'
  },
  category: {
    type: String,
    required: true,
    description: 'Category of the product.'
  },
  stock: {
    type: Number,
    required: true,
    description: 'Stock quantity of the product.'
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt timestamps
});

module.exports = mongoose.model('Product', productSchema);