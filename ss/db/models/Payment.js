const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  paymentEmail: {
    type: String,
  },
  totalOffers: {
    type: Number,
  },
  totalClicks: {
    type: Number,
  },
  totalPay: {
    type: Number,
  },
  paidStatus: {
    type: String,
  }, 
  date: {
      type: Date,
      default: Date.now
    },
});

module.exports = mongoose.model('Payment', PaymentSchema);
