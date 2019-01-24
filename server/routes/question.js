const express = require('express');

const app = express.Router();

const userController = require('../controllers/question');
const authentication=require("../middleware/verify");

app.patch('/:id_question/upvote',authentication.verifyToken ,userController.upvoteQuestion);


app.patch('/:id_question/downvote',authentication.verifyToken, userController.downvoteQuestion);

module.exports = app;
