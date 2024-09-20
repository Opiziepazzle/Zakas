const cartSchema = require('../models/cartSchema');
//const Product = require('../models/product.model');

exports.addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    const userId = req.user._id;
  
    try {
      let cart = await cartSchema.findOne({ userId });
  
      if (!cart) {
        cart = new cartSchema({ userId, items: [{ productId, quantity }] });
      } else {
        const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
  
        if (itemIndex > -1) {
          cart.items[itemIndex].quantity += quantity;
        } else {
          cart.items.push({ productId, quantity });
        }
      }
  
      await cart.save();
      res.status(200).json({ message: 'Product added to cart', cart });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };




  exports.removeFromCart = async (req, res) => {
    const { productId } = req.body;
    const userId = req.user._id;
  
    try {
      const cart = await cartSchema.findOne({ userId });
  
      if (cart) {
        cart.items = cart.items.filter(item => item.productId.toString() !== productId);
        await cart.save();
        res.status(200).json({ message: 'Product removed from cart', cart });
      } else {
        res.status(404).json({ message: 'Cart not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };