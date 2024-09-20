const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/checkAuth');
const cartController = require('../controllers/cartController');




router.post('/add', checkAuth, cartController.addToCart);


router.post('/remove', checkAuth, cartController.removeFromCart);




module.exports = router;