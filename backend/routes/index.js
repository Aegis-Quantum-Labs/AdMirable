// routes/index.js
const express = require('express');
const router = express.Router();

// Sub-routers
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const donationRoutes = require('./donationRoutes');
const charityRoutes = require('./charityRoutes');

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/donations', donationRoutes);
router.use('/charities', charityRoutes);

module.exports = router;