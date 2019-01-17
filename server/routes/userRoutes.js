const express = require('express');

const app = express.Router();

const userController = require('../controllers/user');

app.post('/users', userController.register);

module.exports = app;
