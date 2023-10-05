const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2, // Add minimum length
    maxlength: 50, // Add maximum length
  }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category