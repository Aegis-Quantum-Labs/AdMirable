// config/db.js
const mongoose = require('mongoose');

async function connectDB() {
  const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/admirable-db';
  try {
    await mongoose.connect(dbUrl);
    console.log('Connected to database:', dbUrl);
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
}

module.exports = { connectDB };