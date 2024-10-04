const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');  
const locationRoutes = require('./routes/locationRoutes'); 
const errorHandler = require('./middlewares/errorHandler'); // Import error handler

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://panigrahibalram16:Ping420+@cluster0.ne7hd.mongodb.net/Crowd_Detector?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/auth', authRoutes); // Use the auth routes
app.use('/api/users', userRoutes); // For user signup/login
app.use('/api/location', locationRoutes); // For location tracking

// Optional: Root route to check API status
app.get('/', (req, res) => {
  res.send('API is running');
});
// Error handling middleware
app.use(errorHandler); // Add the error handler here

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
