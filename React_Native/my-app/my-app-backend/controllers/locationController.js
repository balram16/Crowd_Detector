const User = require('../models/User');

exports.submitLocation = (req, res) => {
  const { uniqueId, location } = req.body;

  try {
    console.log('Received location:', uniqueId, location);

    // Simulate some logic with location data
    res.status(200).json({ success: true, message: 'Location data submitted successfully', uniqueId, location });
  } catch (error) {
    console.error('Error submitting location:', error);
    res.status(500).json({ success: false, message: 'Error submitting location' });
  }
};
