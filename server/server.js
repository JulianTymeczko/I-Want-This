// Required packages
const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// Connect to the database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/i-want-this', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(`Mongoose connection error: ${err}`);
});

db.once('open', async () => {
  // The database connection is open and ready for use
  // You can start your Apollo Server here

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware, // Include your authentication middleware here
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});