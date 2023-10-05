const { Category, Order, Product, User } = require('../models');

const resolvers = {
    Query: {
        // Category Query
      category: async () => {
        return Category.find();
      },

       // Order Query
       order: async () => {
        return Order.find();
      },

      // Product Query
      product: async () => {
        return Product.find();
      },


      // User Query
      user: async () => {
        return User.find();
      },
  
    },

    // add mutations



};
module.exports = resolvers;
