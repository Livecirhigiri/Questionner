const express = require('express');

const app = express.Router();

const userController = require('../controllers/user');

// app.post('/users', userController.register)
app.get('/', userController.getUser);
app.post('/', userController.registerUser);
app.patch('/:id_user', userController.updateUser);
app.get('/username', userController.getUsername);
app.delete('/:id_user', userController.deleteUser);

module.exports = app;
