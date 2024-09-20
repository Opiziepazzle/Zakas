const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,  // Updated regex
  },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 30,
    trim: true,
  }, 
  isVerified: {
    type: Boolean,
    default: false
  },

  verificationToken: String,
  verificationTokenExpires: Date,

 
  resetOTP: {
    type: String
},
 
resetOTPExpires: {
    type: Date
},


}, {
  timestamps: true  // Correctly place timestamps option here
});

module.exports = mongoose.model('User', userSchema);
