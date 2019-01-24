const express = require('express');

const app = express.Router();

const userController = require('../controllers/user');
const authentication=require("../middleware/verify");

app.get('/', authentication.verifyToken,userController.getUser);
app.post('/auth/signup', userController.signupUser);
app.post('/auth/login', userController.signinUser);
app.patch('/:id_user', authentication.verifyToken,userController.updateUser);
app.post('/', authentication.verifyToken,userController.registerUser);
app.get('/:username',authentication.verifyToken, userController.getUsername);
app.delete('/:id_user', authentication.verifyToken,userController.deleteUser);

module.exports = app;
