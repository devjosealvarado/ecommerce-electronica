const express = require('express');
const app = express();
const path = require('path');

// Routes frontend
app.use('/', express.static(path.join(__dirname, 'views', 'home')));

module.exports = app;