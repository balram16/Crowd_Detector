// locationRoutes.js

const express = require('express');
const { submitLocation } = require('../controllers/locationController');  // This path should point to the correct location

const router = express.Router();

// Route to handle location data submission
router.post('/', submitLocation);

module.exports = router;