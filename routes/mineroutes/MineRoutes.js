const Controller = require("../../controllers");

module.exports = function (app) {
  app.post("/mineadddata", Controller.MineController.mineadddata);
  app.get("/minegetdata", Controller.MineController.minegetdata);
  app.post("/minepaginationdata", Controller.MineController.minepaginationdata);
  app.get("/minesingledata/:id", Controller.MineController.minesingledata);
  app.patch("/mineupdatedata/:id", Controller.MineController.mineupdatedata);
  app.patch("/minestatusdata/:id", Controller.MineController.minestatusdata);
  app.delete("/minedeletedata/:id", Controller.MineController.minedeletedata);
};
