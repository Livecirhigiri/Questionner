const express = require('express');

const app = express.Router();
const meetupControllers = require('../controllers/meetup');

app.post('/', meetupControllers.registerMeetup);
app.get('/', meetupControllers.getMeetup);
app.get('/upcoming', meetupControllers.Upcomingmeetup);
app.get('/:id', meetupControllers.meetupId);
app.patch('/:id_meetup', meetupControllers.updateMeetup);
app.delete('/:id_meetup', meetupControllers.deleteMeetup);
app.get('/upcoming', meetupControllers.Upcomingmeetup);

module.exports = app;
