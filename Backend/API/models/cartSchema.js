const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const cartSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        description: 'Reference to the User model, representing the user to whom this wishlist belongs.'
      },
  items: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
      description: 'Reference to the Product model, representing the product added to the cart.'
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
      description: 'Quantity of the product added to the cart.'
    }
  }]
}, {
  timestamps: true 
});

module.exports = mongoose.model('Cart', cartSchema);
