const { Category, Order, Product, User } = require('../models');

const resolvers = {
    Query: {
        // Category Query
      category: async () => {
        return await Category.find();
      },

       // Order Query
       order: async () => {
        return await Order.find();
      },

      // Product Query
      product: async () => {
        return await Product.find();
      },


      // User Query
      user: async () => {
        return await User.find();
      },
  
    },

    // add mutations



};
module.exports = resolvers;
