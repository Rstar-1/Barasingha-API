const express = require("express");
const router = express.Router();
const SeoRoute = require("./seoroutes/SeoRoutes");

module.exports = function(app) {
 app.use("/api", router)
 SeoRoute(router);
}
