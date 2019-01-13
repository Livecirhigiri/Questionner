const express=require("express");
const app=express.Router();

const userController=require("../controllers/user");
//
app.post("/",userController.register);

module.exports=app;