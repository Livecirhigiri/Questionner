const express = require('express');

const app = express.Router();

const userController = require('../controllers/user');

app.get('/', userController.getUser);
app.post('/signUp', userController.signupUser);
app.post('/signIn', userController.signinUser);
app.patch('/:id_user', userController.updateUser);
app.get('/username', userController.getUsername);
app.delete('/:id_user', userController.deleteUser);

module.exports = app;
