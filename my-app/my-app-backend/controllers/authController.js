const User = require('../models/User'); // Adjust the path as necessary

// Helper function to generate a unique code (example implementation)
const generateUniqueCode = () => {
    return Math.floor(10000 + Math.random() * 90000).toString(); // Generates a 5-digit unique code
};

// Signup function
const signup = async (req, res) => {
    const { name, email, password, phone } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        // Create a new user
        const uniqueCode = generateUniqueCode(); // Generate a unique code
        const newUser = new User({
            name,
            email,
            password, // You should hash the password in a real application
            phone,
            uniqueCode,
        });

        await newUser.save();

        return res.status(201).json({
            success: true,
            message: 'Signup successful',
            uniqueCode: newUser.uniqueCode,
        });
    } catch (error) {
        console.error('Signup error:', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Login function
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }

        // Check if the password matches (add password hashing and comparison in real applications)
        if (user.password !== password) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }

        return res.status(200).json({
            success: true,
            message: 'Login successful',
            uniqueCode: user.uniqueCode, // Return the unique code on successful login
        });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

module.exports = { signup, login }; // Make sure you are exporting the functions
