const { gql } = require('apollo-server-express');

const typeDefs = gql`  

""" ---Category Type--- """

type Category {
    _id: ID
    name: String
  }

  """ ---Product Type--- """
  
  type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    quantity: Int
    flavour: String
    category: Category
  }

  """ ---Order Type--- """
  
  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  } 

  """ ---User Type--- """
  
  type User {
    _id: ID
    name: String
    email: String
    password: String
    orders: [Order]
  }

  """ ---Checkout Type--- """

  type Checkout {
    session: ID
  }

  """ ---Auth Type--- """

  type Auth {
    token: ID
    user: User
  }

  """ ---Queries--- """
  {
    categories: [Category]
    products:(category: ID, name: String, description: String, price: Float): [Product]
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