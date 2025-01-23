// controllers/userController.js
const User = require('../models/User');

exports.getProfile = async (req, res) => {
  try {
    // req.user.userId is set in authMiddleware
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error('Get profile error:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};