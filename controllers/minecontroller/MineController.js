const MineService = require("../../services/mineservice/MineService");

exports.mineadddata = async function (req, res) {
  try {
    var users = await MineService.mineadddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.minegetdata = async function (req, res) {
  try {
    var users = await MineService.minegetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.minepaginationdata = async function (req, res) {
  try {
    var users = await MineService.minepaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.minesingledata = async function (req, res) {
  try {
    var users = await MineService.minesingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.mineupdatedata = async function (req, res) {
  try {
    var users = await MineService.mineupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.minestatusdata = async function (req, res) {
  try {
    var users = await MineService.minestatusdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.minedeletedata = async function (req, res) {
  try {
    var users = await MineService.minedeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
