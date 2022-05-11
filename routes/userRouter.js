const express = require("express");
const userRouter = express.Router();

const UserController = require("../controllers/UserController");

userRouter
  .route("/register")
  .get(UserController.GetRegister)
  .post(UserController.PostRegister);

userRouter
  .route("/login")
  .get(UserController.GetLogin)
  .post(UserController.PostLogin);

userRouter
  .route("/forgotpassword")
  .get(UserController.GetForgotPassword)
  .post(UserController.UpdateForgotPassword);

module.exports = userRouter;
