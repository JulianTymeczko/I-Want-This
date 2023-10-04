// index.js
const categories = require("category");
const products = require("products");
const order = require("order");
const user = require("user");

// Example usage
console.log("Categories:", categories);
console.log("Products:", products);
const cart = [products[0], products[1]];
console.log("Total Cost:", order.calculateTotalCost(cart));
const foundUser = user.findUserByUsername("user1");
console.log("Found User:", foundUser);