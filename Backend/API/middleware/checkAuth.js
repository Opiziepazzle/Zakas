const jwt = require('jsonwebtoken');
const userSchema = require("../models/userSchema"); // Adjust the path according to your project structure

module.exports = (req, res, next) => {
  // Extract token from Authorization header or cookie
  const token = req.headers.authorization ? req.headers.authorization.split(" ")[1] : req.cookies.token;

  if (!token) {
    return res.status(401).redirect('/login-register'); // Redirect to login if no token is found
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    // Fetch the user from the database using the decoded userId
    userSchema.findById(decoded.userId)
      .then(user => {
        if (!user) {
          return res.status(401).redirect('/login-register');
        }
        req.user = user; // Attach the user object to the request
        next(); // Proceed to the next middleware or route handler
      })
      .catch(err => {
        res.status(500).json({ error: 'Server error', details: err.message });
      });
  } catch (error) {
    res.status(401).redirect('/login-register'); // Redirect to login if token verification fails
  }
};





// // checkAuth.js
// const jwt = require('jsonwebtoken');
// const userSchema = require("../models/userSchema") 

// module.exports = (req, res, next) => {
//   const token = req.cookies.token;

//   if (!token) {
//     return res.status(401).redirect('/login-register'); // Redirect to login if no token
//   }

//   try {
//     // Verify token
//     const decoded = jwt.verify(token, process.env.JWT_KEY);
//     userSchema.findById(decoded.userId)
//       .then(user => {
//         if (!user) {
//           return res.status(401).redirect('/login-register');
//         }
//         req.user = user; // Attach user info to request
//         next();
//       })
//       .catch(err => {
//         res.status(500).json({ error: 'Server error', details: err.message });
//       });
//   } catch (error) {
//     res.status(401).redirect('/login-register'); // Redirect to login if token is invalid
//   }
// };































    
