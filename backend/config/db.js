// db.js
const mongoose = require('mongoose');

async function connectDB() {
  const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/charity-redirect';
  try {
    await mongoose.connect(dbUrl);
    console.log('Database connected:', dbUrl);
  } catch (err) {
    console.error('DB connection failed:', err);
    process.exit(1);
  }
}

module.exports = { connectDB };