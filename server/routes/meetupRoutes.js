const express = require("express");
const app = express.Router();

const userController = require("../controllers/meetup");

app.post("/meetUps", userController.register);

module.exports = app;
