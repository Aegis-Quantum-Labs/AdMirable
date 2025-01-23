// controllers/donationController.js
const Donation = require('../models/Donation');

exports.donateFunds = async (req, res) => {
  try {
    const { amount, charityId } = req.body;
    const userId = req.user.userId; // from authMiddleware

    if (!amount || !charityId) {
      return res.status(400).json({ error: 'Amount and charityId are required.' });
    }

    // In a real app, you'd integrate with a payment gateway
    // For now, just record the donation in the DB
    const donation = new Donation({
      userId,
      amount: parseFloat(amount),
      charityId
    });
    await donation.save();

    return res.status(200).json({ message: 'Donation recorded successfully.' });
  } catch (error) {
    console.error('Donation error:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};

exports.getTotalDonations = async (req, res) => {
  try {
    // Aggregate the total from all donations
    const [result] = await Donation.aggregate([
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]);

    const total = result ? result.total : 0;
    return res.status(200).json({ total });
  } catch (error) {
    console.error('Get total donations error:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};

exports.getUserDonations = async (req, res) => {
  try {
    // Return all donations for this user
    const userId = req.user.userId;
    const donations = await Donation.find({ userId }).sort({ date: -1 });

    return res.status(200).json({ donations });
  } catch (error) {
    console.error('Get user donations error:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};