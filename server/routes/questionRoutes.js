const express = require("express");
const app = express.Router();

const userController = require("../controllers/question");

app.post("/Questions", userController.register);

module.exports = app;
