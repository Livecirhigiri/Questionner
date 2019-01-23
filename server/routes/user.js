const express = require('express');

const app = express.Router();

const userController = require('../controllers/user');

// app.post('/users', userController.register);
// app.post('/api/v1/users', userController.register);
app.get('/', userController.getUser);
// app.patch('/api/v1/users/:id', userController.updateUsers);
app.get('/username', userController.getUsername);
// app.delete('/api/v1/users/:id', userController.deleteUser);

module.exports = app;
