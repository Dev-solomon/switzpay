const mongoose = require('mongoose');

const JwtSchema = new mongoose.Schema({
  username: {
    type: String, 
  },
  email: {
    type: String,
  }, 
  jwt: {
    type: Array,
    "default" : [] 
  }
});

module.exports = mongoose.model('Jwt', JwtSchema);
