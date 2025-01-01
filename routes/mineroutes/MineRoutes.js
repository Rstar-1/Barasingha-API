const Controller = require("../../controllers");

module.exports = function (app) {
  app.post("/mineadddata", Controller.MineController.mineadddata);
  app.post("/minepaginationdata", Controller.MineController.minepaginationdata);
  app.post(
    "/activitypaginationdata",
    Controller.MineController.activitypaginationdata
  );
  app.post(
    "/activitypluspaginationdata",
    Controller.MineController.activitypluspaginationdata
  );
  app.post(
    "/activitynotpaginationdata",
    Controller.MineController.activitynotpaginationdata
  );
  app.post(
    "/managepaginationdata",
    Controller.MineController.managepaginationdata
  );
  app.post(
    "/managepluspaginationdata",
    Controller.MineController.managepluspaginationdata
  );
  app.post(
    "/managenotpaginationdata",
    Controller.MineController.managenotpaginationdata
  );
  app.post(
    "/stockpaginationdata",
    Controller.MineController.stockpaginationdata
  );
  app.post(
    "/stockpluspaginationdata",
    Controller.MineController.stockpluspaginationdata
  );
  app.post(
    "/stocknotpaginationdata",
    Controller.MineController.stocknotpaginationdata
  );
  app.get("/minesingledata/:id", Controller.MineController.minesingledata);
  app.patch("/mineupdatedata/:id", Controller.MineController.mineupdatedata);
  app.patch("/minestatusdata/:id", Controller.MineController.minestatusdata);
  app.delete("/minedeletedata/:id", Controller.MineController.minedeletedata);
};
