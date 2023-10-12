const mongoose = require('mongoose');

// The connection URI can come from the MONGODB_URI environment variable or use a default URI.
const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/i-want-this';

// Options to pass to the MongoDB driver for additional configuration if needed.
const options = {
  // Add any connection options here (e.g., useUnifiedTopology, useNewUrlParser, etc.).
};

// Create a function to establish the MongoDB connection.
async function connectToDatabase() {
  try {
    await mongoose.connect(uri, options);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Export the connection function for use in your application.
module.exports = {
  connectToDatabase,
  connection: mongoose.connection, // You can still access the connection object if needed.
};
