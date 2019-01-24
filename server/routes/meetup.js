const express = require('express');

const app = express.Router();
const meetupcontrollers = require('../controllers/meetup');
const authentication=require("../middleware/verify");

app.post('/',authentication.verifyToken, meetupcontrollers.registerMeetup);
app.get('/',authentication.verifyToken, meetupcontrollers.getMeetup);
app.get('/upcoming', authentication.verifyToken,meetupcontrollers.Upcomingmeetup);
app.get('/:id',authentication.verifyToken, meetupcontrollers.meetupId);
app.patch('/:id_meetup',authentication.verifyToken, meetupcontrollers.updateMeetup);
app.delete('/:id_meetup',authentication.verifyToken, meetupcontrollers.deleteMeetup);
app.get('/upcoming',authentication.verifyToken, meetupcontrollers.Upcomingmeetup);

module.exports = app;
