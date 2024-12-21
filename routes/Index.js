const express = require("express");
const router = express.Router();
const MineRoute = require("./mineroutes/MineRoutes");

module.exports = function(app) {
 app.use("/api", router)
 MineRoute(router);
}
