const express = require("express");
const app = express.Router();

const userController = require("../controllers/meetup");

app.post("/api/v1/meetup", userController.register);
app.get("/api/v1/meetup", userController.allmeetup);
app.get("/api/v1/meetup/:id", userController.meetupId);
app.patch("/api/v1/meetup/:id", userController.updateMeetup);
app.delete("/api/v1/meetup/:id", userController.deleteMeetup);

module.exports = app;
