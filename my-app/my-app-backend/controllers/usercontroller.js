const User = require('../models/User');
const { generateUniqueId } = require('../utils/generateUniqueId');

// Function to create a new user
const createUser = async (req, res) => {
  const uniqueId = generateUniqueId();

  try {
    const newUser = new User({ userId: uniqueId });
    await newUser.save();
    res.status(201).json({ userId: uniqueId });
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
};

module.exports = { createUser };
