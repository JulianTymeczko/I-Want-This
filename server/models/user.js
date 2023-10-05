const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
<<<<<<< HEAD
const Order = require('server/models/Order.js');
=======
const Order = require('./Order.js');
>>>>>>> a9bd52d6efbe9aadbd5d45f3d9f9b206c60ee1a6

// User schema
const User = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  orders: [Orderrder.schema]
})


// create password middleware
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// check password against the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};


module.exports = User;