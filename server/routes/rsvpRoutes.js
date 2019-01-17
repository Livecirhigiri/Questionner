const express = require("express");
const app = express.Router();

const userController = require("../controllers/rsvp");

app.post("/rsvps", userController.register);

module.exports = app;
