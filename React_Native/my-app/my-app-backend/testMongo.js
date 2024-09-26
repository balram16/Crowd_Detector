const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://panigrahibalram16:Ping420+@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority')
  .then(() => {
    console.log('MongoDB connected successfully');
    mongoose.connection.close(); // Close the connection
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
