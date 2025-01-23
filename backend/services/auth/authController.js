// authController.js
const jwt = require('jsonwebtoken');
// Assume we have a User model
const User = require('../../models/User');

exports.registerUser = async (req, res) => {
  try {
    // Minimal example
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();
    return res.status(201).json({ message: 'User registered.' });
  } catch (err) {
    return res.status(500).json({ error: 'Registration failed' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    // Minimal example
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ error: 'Login failed' });
  }
};