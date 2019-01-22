const express = require('express');

const app = express.Router();
const meetupcontrollers = require('../controllers/meetup');

app.post('/', meetupcontrollers.registerMeetup);
app.get('/', meetupcontrollers.getMeetup);
app.get('/:id', meetupcontrollers.meetupId);
app.patch('/:id_meetup', meetupcontrollers.updateMeetup);
app.delete('/:id_meetup', meetupcontrollers.deleteMeetup);

module.exports = app;
