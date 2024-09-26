const express = require('express');
const { createUser } = require('../controllers/userController');

const router = express.Router();

// Route to create a user
router.post('/create-user', createUser);

module.exports = router;
