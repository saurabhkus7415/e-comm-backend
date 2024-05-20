const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/users");
const uri = 'mongodb://127.0.0.1:27017/e-comm'; // when not connect using local host try to using this method

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('MongoDB connection error:', err));