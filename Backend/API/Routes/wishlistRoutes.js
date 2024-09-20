const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/checkAuth');
const wishlistController = require('../controllers/wishlistController');


router.post('/add', checkAuth, wishlistController.addToWishlist);



router.post('/remove', checkAuth, wishlistController.removeFromWishlist);

module.exports = router;