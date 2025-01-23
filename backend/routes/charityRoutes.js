// routes/charityRoutes.js
const express = require('express');
const router = express.Router();
const { listCharities } = require('../controllers/charityController');

// /api/charities
router.get('/', listCharities);

module.exports = router;