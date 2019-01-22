const express = require('express');

const app = express.Router();

const userController = require('../controllers/user');

// app.post('/users', userController.register);
// app.post('/api/v1/users', userController.register);
// app.get('/api/v1/users', userController.allUsers);
// app.patch('/api/v1/users/:id', userController.updateUsers);
// app.get('/api/v1/users/:id', userController.getUserId);
// app.delete('/api/v1/users/:id', userController.deleteUser);

module.exports = app;
