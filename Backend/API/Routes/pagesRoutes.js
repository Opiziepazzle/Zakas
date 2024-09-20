
const express = require("express");
const router = express.Router();








router.get("/", (req, res) => {
    res.render("datas/index", {
      styles: "main.css",
      main: "main.js",
    });
  });
  
  router.get("/blog-03-coloumns", (req, res) => {
    res.render("datas/blog-03-coloumns", {
      styles: "main.css",
      main: "main.js",
    });
  });
  
  router.get("/blog-04-coloumns", (req, res) => {
    res.render("datas/blog-04-coloumns", {
      styles: "main.css",
      main: "main.js",
    });
  });
  
  router.get("/blog-list-left-sidebar", (req, res) => {
    res.render("datas/blog-list-left-sidebar", {
      styles: "main.css",
      main: "main.js",
    });
  });
  
  router.get("/blog-list-right-sidebar", (req, res) => {
    res.render("datas/blog-list-right-sidebar", {
      styles: "main.css",
      main: "main.js",
    });
  });
  
  router.get("/blog-list", (req, res) => {
    res.render("datas/blog-list", {
      styles: "main.css",
      main: "main.js",
    });
  });
  

  router.get("/blog-list-left-sidebar", (req, res) => {
    res.render("datas/blog-list-left-sidebar", {
      styles: "main.css",
      main: "main.js",
    });
  });
  
  router.get("/blog-list-right-sidebar", (req, res) => {
    res.render("datas/blog-list-right-sidebar", {
      styles: "main.css",
      main: "main.js",
    });
  });
  
  router.get("/blog-list", (req, res) => {
    res.render("datas/blog-list", {
      styles: "main.css",
      main: "main.js",
    });
  });
  
  router.get("/blog-right-sidebar", (req, res) => {
    res.render("datas/blog-right-sidebar", {
      styles: "main.css",
      main: "main.js",
    });
  });
  
  router.get("/blog", (req, res) => {
    res.render("datas/blog", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/cart", (req, res) => {
    res.render("datas/cart", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/checkout", (req, res) => {
    res.render("datas/checkout", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/compare", (req, res) => {
    res.render("datas/compare", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/contact-us", (req, res) => {
    res.render("datas/contact-us", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/index-02", (req, res) => {
    res.render("datas/index-02", {
      styles: "main.css",
      main: "main.js",
    });
  });


  router.get("/index-03", (req, res) => {
    res.render("datas/index-03", {
      styles: "main.css",
      main: "main.js",
    });
  });


  router.get("/index-04", (req, res) => {
    res.render("datas/index-04", {
      styles: "main.css",
      main: "main.js",
    });
  });


  router.get("/index-05", (req, res) => {
    res.render("datas/index-05", {
      styles: "main.css",
      main: "main.js",
    });
  });


  router.get("/index-06", (req, res) => {
    res.render("datas/index-06", {
      styles: "main.css",
      main: "main.js",
    });
  });


  router.get("/index-07", (req, res) => {
    res.render("datas/index-07", {
      styles: "main.css",
      main: "main.js",
    });
  });


  router.get("/index-08", (req, res) => {
    res.render("datas/index-08", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/index-09", (req, res) => {
    res.render("datas/index-09", {
      styles: "main.css",
      main: "main.js",
    });
  });


  router.get("/index-10", (req, res) => {
    res.render("datas/index-10", {
      styles: "main.css",
      main: "main.js",
    });
  });


  router.get("/indexx", (req, res) => {
    res.render("datas/indexx", {
      styles: "main.css",
      main: "main.js",
    });
  });


  router.get("/login-register", (req, res) => {
    res.render("datas/login-register", {
      styles: "main.css",
      main: "main.js",
      data: "data.js"
    });
  });


  router.get("/my-account", (req, res) => {
    res.render("datas/my-account", {
      
      styles: "main.css",
      main: "main.js",
    });
  });


  router.get("/order-tracking", (req, res) => {
    res.render("datas/order-tracking", {
      styles: "main.css",
      main: "main.js",
    });
  });


  router.get("/product-details-affiliate", (req, res) => {
    res.render("datas/product-details-affiliate", {
      styles: "main.css",
      main: "main.js",
    });
  });


  router.get("/product-details-gallery-left", (req, res) => {
    res.render("datas/product-details-gallery-left", {
      styles: "main.css",
      main: "main.js",
    });
  });


  router.get("/product-details-gallery-right", (req, res) => {
    res.render("datas/product-details-gallery-right", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/product-details-group", (req, res) => {
    res.render("datas/product-details-group", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/product-details-slider-box", (req, res) => {
    res.render("datas/product-details-slider-box", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/product-details-slider-full-width", (req, res) => {
    res.render("datas/product-details-slider-full-width", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/product-details-sticky-left", (req, res) => {
    res.render("datas/product-details-sticky-left", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/product-details-sticky-right", (req, res) => {
    res.render("datas/product-details-sticky-right", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/product-details-tab-style-2", (req, res) => {
    res.render("datas/product-details-tab-style-2", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/product-details-tab-style-3", (req, res) => {
    res.render("datas/product-details-tab-style-3", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/product-details-variable", (req, res) => {
    res.render("datas/product-details-variable", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/product-details", (req, res) => {
    res.render("datas/product-details", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/shop-four-coloumns", (req, res) => {
    res.render("datas/shop-four-coloumns", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/shop-fullwidth", (req, res) => {
    res.render("datas/shop-fullwidth", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/shop-list-right-sidebar", (req, res) => {
    res.render("datas/shop-list-right-sidebar", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/shop-list-sidebar", (req, res) => {
    res.render("datas/shop-list-sidebar", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/shop-list", (req, res) => {
    res.render("datas/shop-list", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/shop-right-sidebar", (req, res) => {
    res.render("datas/shop-right-sidebar", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/shop-three-coloumns", (req, res) => {
    res.render("datas/shop-three-coloumns", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/shop", (req, res) => {
    res.render("datas/shop", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/single-post-audio", (req, res) => {
    res.render("datas/single-post-audio", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/single-post-gallery", (req, res) => {
    res.render("datas/single-post-gallery", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/single-post-image", (req, res) => {
    res.render("datas/single-post-image", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/single-post-right-sidebar", (req, res) => {
    res.render("datas/single-post-right-sidebar", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/single-post-video", (req, res) => {
    res.render("datas/single-post-video", {
      styles: "main.css",
      main: "main.js",
    });
  });

  router.get("/wishlist", (req, res) => {
    res.render("datas/wishlist", {
      styles: "main.css",
      main: "main.js",
    });
  });


  router.get("/youtube", (req, res) => {
    res.render("datas/youtube", {
      styles: "main.css",
      main: "main.js",
    });
  });


  module.exports = router;