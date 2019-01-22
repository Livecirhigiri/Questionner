const express = require('express');

const app = express.Router();

const userController = require('../controllers/question');

app.post('/questions', userController.registerQ);
app.get('/api/v1/questions', userController.allquestion);
app.get('/api/v1/questions/:id', userController.getquestionId);
app.patch('/questions/:id/upvote', userController.upvoteQuestions);
app.patch('/questions/:id/downvote', userController.downvoteQuestions);
app.delete('/api/v1/questions/:id', userController.deleteQuestion);

module.exports = app;
