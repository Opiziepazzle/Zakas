const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bodyParser = require('body-parser');
const userSchema = require("../models/userSchema");
const jwt = require('jsonwebtoken')
const checkAuth = require("../middleware/checkAuth");




router.post("/signup", (req, res, next) => {
  //to avoid users registering with the same mail
  userSchema
    .find({ email: req.body.email  })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail Already exist",
        });
      }  else {
        // Check if the username already exists
        return userSchema.find({ username: req.body.username })
        .exec();
      }
    })
    .then((user) => {
      if (user && user.length >= 1) {
        return res.status(409).json({
          message: "Username already exists",
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const user = new userSchema({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              username: req.body.username,
              password: hash,
              firstname: req.body.firstname,
              lastname: req.body.lastname
            });

            user
              .save()
              .then((result) => {

                res.redirect("/login-register")
              //  message: "User created",
                // res.status(201).json({
                 
                // });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  error: err,
                });
              });
          }
        });
      }
    });
});



//Login

router.post('/login', (req, res) => {
  const { emailOrUsername, password } = req.body;

  if (!emailOrUsername || !password) {
    return res.status(400).json({ message: 'Missing credentials' });
  }

  userSchema.findOne({ $or: [{ email: emailOrUsername }, { username: emailOrUsername }] })
    .exec()
    .then(user => {
      if (!user) {
       // res.redirect("/login-register")
       return res.status(401).json({ message: 'Auth Failed: User not found' });
      }

      bcrypt.compare(password, user.password, (err, result) => {
        if (err || !result) {
          return res.status(401).json({ message: 'Auth Failed: Incorrect password' });
        }

        // Password is correct, generate JWT
        const token = jwt.sign(
          {
            email: user.email,
            username: user.username,
            userId: user._id
          },
          process.env.JWT_KEY,
          { expiresIn: '1h' }
        );
         

       
        


        // Optionally, set a cookie for storing the token securely
       res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

        // Redirect to the specified URL on successful login
     res.status(200).json({ message: 'Auth Successful', token: token,  username: user.username, redirectUrl: '/my-account'   }); 
       //res.redirect('/my-account', )

        
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Server error', details: err.message });
    });
});



    
    
  








router.get('/logout', (req, res) => {
  // Clear the token cookie or remove the token from client side
  res.clearCookie('token'); // Assuming the token is stored in a cookie

 // res.status(200).json({ message: 'Logout successful' });
   res.redirect('/login-register', )
})

module.exports = router;