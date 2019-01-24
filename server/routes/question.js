const express = require('express');

const app = express.Router();

const qstController = require('../controllers/question');
const authentication=require("../middleware/verify");

app.patch('/:id_question/upvote',authentication.verifyToken ,qstController.upvoteQuestion);

app.post('/:id',authentication.verifyToken, qstController.registerQuestion);
app.patch('/:id_question/downvote',authentication.verifyToken, qstController.downvoteQuestion);

module.exports = app;
