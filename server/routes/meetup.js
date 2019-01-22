const express = require('express');

const app = express.Router();
const meetupcontrollers = require('../controllers/meetup');

// app.get("/", meetupcontrollers.getMeetup);
// app.post("/", meetupcontrollers.registerMeetup);

// app.post('/api/v1/meetups', userController.registerM);
app.get('/', meetupcontrollers.getMeetup);
// app.get('/api/v1/meetups/:id', userController.meetupId);
// app.patch('/api/v1/meetups/:id', userController.updateMeetup);
// app.delete('/api/v1/meetups/:id', userController.deleteMeetup);

module.exports = app;
