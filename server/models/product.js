const mongoose = require('mongoose');

const { Schema } = mongoose;


// Product schema
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  flavour: {
    type: String
    
  
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },

 
  flavour: {
    type: String
  },
  
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

// Product is a table using the model outlined by the schema
const Product = mongoose.model('Product', productSchema);

// // example product list
// const products = [
//     {
//       id: 1,
//       name: "Cupcake",
//       category: "cupcakes",
//       flavors: ["strawberry", "vanilla", "chocolate", "marble", "red-velvet"],
//       price: 2.99,
//     },
//     {
//       id: 2,
//       name: "Cake",
//       category: "cakes",
//       flavors: ["red-velvet", "vanilla", "chocolate", "strawberry", "marble"],
//       price: 22.99,
//     },
//     {
//       id: 3,
//       name: "Donut",
//       category: "donuts",
//       flavors: ["vanilla", "chocolate", "strawberry", "marble", "red-velvet"],
//       price: 1.49,
//     },
//   ];
  
  module.exports = Product;