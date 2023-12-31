const mongoose = require('mongoose');

// Use the MONGODB_URI environment variable if available, or a default URI if not set.
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/i-want-this";

// Options for MongoDB connection.
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Establish the MongoDB connection.
console.log('Connecting to MongoDB with URI:', uri);
mongoose.connect(uri, options)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

// Handle connection events
const db = mongoose.connection;

// Event: MongoDB connected
db.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

// Event: MongoDB error
db.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

// Event: MongoDB disconnected
db.on('disconnected', () => {
  console.log('Mongoose disconnected from MongoDB');
}); 

// Event: Close the MongoDB connection when the Node.js process ends
process.on('SIGINT', () => {
  db.close(() => {
    console.log('MongoDB connection closed through app termination');
    process.exit(0);
  });
});

module.exports = db;