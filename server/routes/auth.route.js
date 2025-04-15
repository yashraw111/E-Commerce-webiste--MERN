const express = require("express");
const {
  GoogleLogin,
  Login,
  Logout,
  Register,
} = require("../controller/auth.controller.js");

const AuthRoute = express.Router();

AuthRoute.post("/register", Register);
AuthRoute.post("/login", Login);
AuthRoute.post("/google-login", GoogleLogin);
AuthRoute.get("/logout", Logout);

module.exports = AuthRoute;

