const mongoose = require('mongoose');

const OfferSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    category: {
        type: String,
    },
    device: {
        type: String,
    },
    payout: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
    }
});

module.exports = mongoose.model('Offer', OfferSchema);