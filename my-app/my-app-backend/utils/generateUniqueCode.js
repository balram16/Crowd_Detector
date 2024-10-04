// Generate Unique 5-digit Code
const generateUniqueCode = () => {
    return Math.floor(10000 + Math.random() * 90000);
  };
  
  module.exports = generateUniqueCode;
  