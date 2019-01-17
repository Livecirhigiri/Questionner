const express = require("express");
const app = express.Router();

const userController = require("../controllers/question");

app.post("/api/v1/Questions", userController.register);
app.get("/api/v1/Questions", userController.allquestion);
app.get("/api/v1/Questions/:id", userController.getquestionId);
app.patch("/api/v1/Questions/:id", userController.updateQuestions);
app.delete("/api/v1/Questions/:id", userController.deleteQuestion);

module.exports = app;
