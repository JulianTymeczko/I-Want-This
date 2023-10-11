// index.js
const Category = require("./category");
const Product = require("./product");
const Order = require("./order");
const User = require("./user");

// Example usage
/*
console.log("Categories:", categories);
console.log("Products:", products);
const cart = [products[0], products[1]];
console.log("Total Cost:", order.calculateTotalCost(cart));
const foundUser = user.findUserByUsername("user1");
console.log("Found User:", foundUser);
*/

module.exports = {
    Category, 
    Product,
    Order,
    User
}