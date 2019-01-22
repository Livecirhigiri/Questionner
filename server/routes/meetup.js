const express = require('express');

const app = express.Router();

const userController = require('../controllers/meetup');

app.post('/api/v1/meetups', userController.registerM);
app.get('/api/v1/meetups', userController.allmeetup);
app.get('/api/v1/meetups/:id', userController.meetupId);
app.patch('/api/v1/meetups/:id', userController.updateMeetup);
app.delete('/api/v1/meetups/:id', userController.deleteMeetup);

module.exports = app;
