const mongoose = require('mongoose');

const { Schema } = mongoose;

// Order schema
const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
});

// Orders are made following the model set by the schema
const Order = mongoose.model('Order', orderSchema);


module.exports = Order;