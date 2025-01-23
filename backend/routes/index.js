// routes/index.js
const express = require('express');
const router = express.Router();

// Import controllers
const authController = require('../services/auth/authController');
const adTrackingController = require('../services/tracking/adTrackingController');
const paymentController = require('../services/payments/paymentController');
const charityController = require('../services/charities/charityController');

// Example endpoints
router.post('/auth/register', authController.registerUser);
router.post('/auth/login', authController.loginUser);
router.post('/tracking/ad', adTrackingController.logAdImpression);
router.post('/payments/donate', paymentController.donateFunds);
router.get('/charities', charityController.listCharities);
router.get('/donations/total', paymentController.getTotalDonations);

module.exports = router;