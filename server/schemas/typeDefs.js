const { gql } = require('apollo-server-express');

const typeDefs = gql`  

""" ---Category query--- """

type Category {
    _id: ID!
    name: String
  }

  type Query {
    category: [Category]!
    category(categoryId: ID!): Category
  }
  """ ---Order query--- """
  
  type Order {
    _id: ID!
    purchaseDate: String
    products: [Product]
  } 

  type Query {
    order: [Order]
  }

  """ ---Product query--- """
  
  type Product {
    _id: ID!
    name: String
    description: String
    image: String
    price: Int
    quantity: Int
    flavour: [String]
  }

  type Query {
    product: [Product]!
    product(productId: ID!): Product
  }

  """ ---User query--- """
  
  type User {
    _id: ID!
    email: String!
    password: String!
    orders: [order]
  }

  type Query {
    me: User
    users(limit: Int): [User]
  }
  `;

  module.exports = typeDefs;