const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  uniqueCode: { type: Number, unique: true }, // Unique code generated on signup
  createdAt: { type: Date, default: Date.now }, // Automatically set the creation date
});

// Export the User model
module.exports = mongoose.model('User', userSchema);
