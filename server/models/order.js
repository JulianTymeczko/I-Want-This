// order.js
function calculateTotalCost(cart) {
    let totalCost = 0;
  
    for (const item of cart) {
      totalCost += item.price;
    }
  
    return totalCost;
  }
  
  module.exports = {
    calculateTotalCost,
  };