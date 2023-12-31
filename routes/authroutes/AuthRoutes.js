const express = require("express");
const router = express.Router();
const Controller = require("../../controllers");
const authenticate = require("../../middleware/Authenticate");

module.exports = function (app) {
  app.post("/register", Controller.AuthLoginController.register);
  app.post("/login", Controller.AuthLoginController.login);
  app.get(
    "/getloginuser",
    authenticate,
    Controller.AuthLoginController.getloginuser
  );
  app.get("/validuser",authenticate,Controller.AuthLoginController.validuser);
  app.get(
    "/logout",authenticate,
    Controller.AuthLoginController.logout
  );
};
