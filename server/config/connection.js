const mongoose = require('mongoose');

// Use the MONGODB_URI environment variable if available, or a default URI if not set.
const uri = process.env.MONGODB_URI || "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>";

// Options for MongoDB connection.
const options = {
  useNewUrlParser: true, // Adjust the options as needed.
  useUnifiedTopology: true,
};

// Establish the MongoDB connection.
mongoose.connect(uri, options)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

// Export the connection for use in your application.
const db = mongoose.connection;
module.exports = db;