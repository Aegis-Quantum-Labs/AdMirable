// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getProfile } = require('../controllers/userController');

// Protected route to get user's own profile
router.get('/profile', authMiddleware, getProfile);

module.exports = router;