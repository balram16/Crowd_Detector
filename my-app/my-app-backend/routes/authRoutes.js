const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController'); // Ensure this path is correct

// Define the signup route
router.post('/signup', signup); // Ensure 'signup' is defined and imported correctly
// Define the login route
router.post('/login', login); // Ensure 'login' is defined and imported correctly

module.exports = router; // Don't forget to export the router
