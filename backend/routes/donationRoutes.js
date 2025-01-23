// routes/donationRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
  donateFunds,
  getTotalDonations,
  getUserDonations
} = require('../controllers/donationController');

// /api/donations
router.post('/', authMiddleware, donateFunds);         // Make a donation
router.get('/total', getTotalDonations);              // Public: get total donations overall
router.get('/mine', authMiddleware, getUserDonations); // Get current user's donation history

module.exports = router;