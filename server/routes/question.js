const express = require('express');

const app = express.Router();

const userController = require('../controllers/question');

app.patch('/:id_question/upvote', userController.upvoteQuestion);
// app.get('/api/v1/questions', userController.allquestion);
// app.get('/api/v1/questions/:id', userController.getquestionId);

app.patch('/:id_question/downvote', userController.downvoteQuestion);
// app.delete('/api/v1/questions/:id', userController.deleteQuestion);

module.exports = app;
