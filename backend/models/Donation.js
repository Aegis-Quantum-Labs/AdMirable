// models/Donation.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const donationSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  charityId: { type: String, required: true },  // Or reference to a Charity model
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Donation', donationSchema);