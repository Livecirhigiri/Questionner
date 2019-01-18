const express = require('express');

const app = express.Router();

const userController = require('../controllers/question');

app.post('/questions', userController.registerQ);
app.get('/api/v1/Questions', userController.allquestion);
app.get('/api/v1/Questions/:id', userController.getquestionId);
app.patch('/Questions/:id/upvote', userController.upvoteQuestions);
app.patch('/Questions/:id/downvote', userController.downvoteQuestions);
app.delete('/api/v1/Questions/:id', userController.deleteQuestion);

module.exports = app;
