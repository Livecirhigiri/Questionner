const express = require('express');

const app = express.Router();
const meetupcontrollers = require('../controllers/meetup');

app.post('/', meetupcontrollers.registerMeetup);
app.get('/', meetupcontrollers.getMeetup);
app.get('/:id', meetupcontrollers.meetupId);
// app.patch('/api/v1/meetups/:id', userController.updateMeetup);
// app.delete('/api/v1/meetups/:id', userController.deleteMeetup);

module.exports = app;
