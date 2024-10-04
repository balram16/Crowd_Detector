const mongoose = require('mongoose');

const uri = 'mongodb+srv://panigrahibalram16:Ping420+@cluster0.ne7hd.mongodb.net/Crowd_Detector?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});
