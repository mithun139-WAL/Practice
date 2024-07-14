const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI || 'your-mongodb-uri';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

module.exports = mongoose;
