const wishlistSchema = require('../models/wishlistSchema');
//const productSchema = require('../models/productSchema');


exports.addToWishlist = async (req, res) => {
  const { productId } = req.body;
  const userId = req.user._id;

  try {
    let wishlist = await wishlistSchema.findOne({ userId });

    if (!wishlist) {
      wishlist = new wishlistSchema({ userId, products: [productId] });
    } else {
      if (!wishlist.products.includes(productId)) {
        wishlist.products.push(productId);
      }
    }

    await wishlist.save();
    res.status(200).json({ message: 'Product added to wishlist', wishlist });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.removeFromWishlist = async (req, res) => {
  const { productId } = req.body;
  const userId = req.user._id;

  try {
    const wishlist = await wishlistSchema.findOne({ userId });

    if (wishlist) {
      wishlist.products = wishlist.products.filter(product => product.toString() !== productId);
      await wishlist.save();
      res.status(200).json({ message: 'Product removed from wishlist', wishlist });
    } else {
      res.status(404).json({ message: 'Wishlist not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
