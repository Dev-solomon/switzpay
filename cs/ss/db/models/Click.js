const mongoose = require('mongoose');

const ClickSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  }, 
  clicks: {
    type: Number,
  }, 
  day: {
    type: String,
  },
  date: {
      type: Date,
      default: Date.now
    },
});

module.exports = mongoose.model('Click', ClickSchema);
