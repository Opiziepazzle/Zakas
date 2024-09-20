const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const wishlistSchema = new Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      description: 'Reference to the User model, representing the user to whom this wishlist belongs.'
    },
    products: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
      description: 'Reference to the Product model, representing the product added to the wishlist.'
    }]
  }, {
    timestamps: true // Automatically adds createdAt and updatedAt timestamps
  });
  
  module.exports = mongoose.model('Wishlist', wishlistSchema)