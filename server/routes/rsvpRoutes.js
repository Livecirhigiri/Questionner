const express = require('express');

const app = express.Router();

const userController = require('../controllers/rsvp');

app.post('/api/v1/rsvps', userController.register);
app.get('/api/v1/rsvps', userController.allrsvp);
/* app.post("/Questions", userController.register);
app.post("/Questions", userController.register);
app.post("/Questions", userController.register); */

module.exports = app;
