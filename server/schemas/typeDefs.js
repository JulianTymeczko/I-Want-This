const { gql } = require('apollo-server-express');

const typeDefs = gql`  

""" ---Category Type--- """

type Category {
    _id: ID
    name: String
  }

  """ ---Order Type--- """
  
  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  } 

  """ ---Product Type--- """
  
  type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: Int
    quantity: Int
    flavour: [String]
  }

  """ ---User Type--- """
  
  type User {
    _id: ID
    email: String!
    password: String!
    orders: [order]
  }

  """ ---Queries--- """
  {
    categories: [Category]
    products:(category: ID, name: String, description: String, price: Decimal): [Product]
    product(_id: ID): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout

  }

  """ ---Mutations--- """
  {
    
  }
  `;

  module.exports = typeDefs;