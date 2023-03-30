const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  confirmPassword: {
    type: String,
  },
  phone: {
    type: String,
  },
  image: {
    data: Buffer,
    contentType: String
}
});

module.exports = mongoose.model('User', UserSchema);
