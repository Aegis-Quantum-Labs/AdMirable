// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'No authorization header provided.' });
  }

  // Expecting format: "Bearer <token>"
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Invalid authorization header format.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Attach user info to request for downstream usage
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Token is invalid or expired.' });
  }
}

module.exports = authMiddleware;