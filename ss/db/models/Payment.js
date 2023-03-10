const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  user_id: {
    // type: String,
    type: mongoose.Schema.Types.ObjectId,
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
  // totalClicks: {
  //   type: Number,
  // },
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
