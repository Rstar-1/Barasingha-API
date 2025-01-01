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

exports.activitypaginationdata = async function (req, res) {
  try {
    var users = await MineService.activitypaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.activitypluspaginationdata = async function (req, res) {
  try {
    var users = await MineService.activitypluspaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.activitynotpaginationdata = async function (req, res) {
  try {
    var users = await MineService.activitynotpaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.managepaginationdata = async function (req, res) {
  try {
    var users = await MineService.managepaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.managepluspaginationdata = async function (req, res) {
  try {
    var users = await MineService.managepluspaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.managenotpaginationdata = async function (req, res) {
  try {
    var users = await MineService.managenotpaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.stockpaginationdata = async function (req, res) {
  try {
    var users = await MineService.stockpaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.stockpluspaginationdata = async function (req, res) {
  try {
    var users = await MineService.stockpluspaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.stocknotpaginationdata = async function (req, res) {
  try {
    var users = await MineService.stocknotpaginationdata(req, res);

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
