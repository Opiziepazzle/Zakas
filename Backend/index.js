const express = require('express')
const app = express()
const PORT = process.env.PORT || 1921
const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const checkAuth = require('./API/middleware/checkAuth')
const bodyParser  = require('body-parser')
const userRoutes = require('./API/Routes/userRoutes')
const pagesRoutes = require('./API/Routes/pagesRoutes')
const ErrorHandler = require('./API/middleware/ErrorHandler')
const cartRoutes = require('./API/Routes/cartRoutes');
const authRoutes = require('./API/Routes/authRoutes');
const wishlistRoutes = require('./API/Routes/wishlistRoutes');

const session = require('express-session');
const MongoStore = require('connect-mongo');


 require('./Config/db')
 require('dotenv').config();

 

 app.use(express.urlencoded({ extended: true }));  // To parse form data
 app.use(express.json());  // To parse JSON data
 



//Configure Handlebars to Allow Prototype Property Access
 app.use(express.json())
const { engine } = require("express-handlebars");
app.engine("hbs", engine({ extname: ".hbs", defaultLayout: "main",
   
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
  }

}));

app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "public")));
 
 app.use(bodyParser.urlencoded({extended: false}))
 app.use(bodyParser.json());
 app.use(cookieParser());



 


// app.post('/user/signup', (req, res) => {
//   console.log(req.body);  // This will show what data is being sent from the form
//   // Handle signup logic
// });





app.get('/my-account', checkAuth, (req, res) => {
  if (!req.user) {
    return res.status(401).redirect('/login-register');
  }

  res.render('datas/my-account', { user: req.user });
});






 //Handling CORS Error
app.use((req, res, next) =>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization "
  );
  if ( req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({});
  }
  next();
})



//Routes which should handle request
app.use('/user', userRoutes)
app.use('/user', authRoutes)

app.use('/', cartRoutes)
app.use('/', wishlistRoutes)

app.use('/', pagesRoutes)
app.use('/blog-03-coloumns',pagesRoutes)
app.use('/blog-04-coloumns',pagesRoutes)
app.use('/blog-list-left-sidebar',pagesRoutes)
app.use('/blog-list-right-sidebar',pagesRoutes)
app.use('/blog-list',pagesRoutes)
app.use('/blog-right-sidebar',pagesRoutes)
app.use('/blog',pagesRoutes)
app.use('/cart',pagesRoutes)
app.use('/checkout',pagesRoutes)
app.use('/compare',pagesRoutes)
app.use('/contact-us',pagesRoutes)
app.use('/index-02',pagesRoutes)
app.use('/index-03',pagesRoutes)
app.use('/index-04',pagesRoutes)
app.use('/index-05',pagesRoutes)
app.use('/index-06',pagesRoutes)
app.use('/index-07',pagesRoutes)
app.use('/index-08',pagesRoutes)
app.use('/index-09',pagesRoutes)
app.use('/index-10',pagesRoutes)
app.use('/indexx',pagesRoutes)
app.use('/login-register',pagesRoutes)
app.use('/my-account',pagesRoutes)
app.use('/order-tracking',pagesRoutes)
app.use('/product-details-affiliate',pagesRoutes)
app.use('/product-details-gallery-left',pagesRoutes)
app.use('/product-details-gallery-right',pagesRoutes)
app.use('/product-details-affiliate',pagesRoutes)
app.use('/product-details-group',pagesRoutes)
app.use('/product-details-slider',pagesRoutes)
app.use('/product-details-slider-full-width',pagesRoutes)
app.use('/product-details-sticky-left',pagesRoutes)
app.use('/product-details-sticky-right',pagesRoutes)
app.use('/product-details-tab-style-2',pagesRoutes)
app.use('/product-details-tab-style-3',pagesRoutes)
app.use('/product-details-variable',pagesRoutes)
app.use('/product-details',pagesRoutes)
app.use('/shop-four-coloumns',pagesRoutes)
app.use('/shop-fullwidth',pagesRoutes)
app.use('/shop-list-right-sidebar',pagesRoutes)
app.use('/shop-three-coloumns',pagesRoutes)
app.use('/shop',pagesRoutes)
app.use('/single-post-audio',pagesRoutes)
app.use('/single-post-gallery',pagesRoutes)
app.use('/single-post-image',pagesRoutes)
app.use('/single-post-right-sidebar',pagesRoutes)
app.use('/single-post-video',pagesRoutes)
app.use('/wishlist',pagesRoutes)
app.use('/youtube',pagesRoutes)








//Error Handling 
ErrorHandler(app)




app.listen(PORT, () => {
    console.log(`Server started running on port ${PORT}`);
  });