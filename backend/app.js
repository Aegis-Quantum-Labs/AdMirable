// app.js
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mount main routes
app.use('/api', routes);

module.exports = app;