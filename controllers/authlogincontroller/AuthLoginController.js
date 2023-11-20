const express = require("express");
const AuthLoginService = require("../../services/authloginservice/AuthLoginService");

exports.register = async function (req, res) {
  try {
    var users = await AuthLoginService.register(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Succesfully Users Retrieved",
    });
  } catch (error) {
    error;
  }
};

exports.getloginuser = async function (req, res) {
  try {
    var users = await AuthLoginService.getloginuser(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Succesfully Users Retrieved",
    });
  } catch (error) {
    error;
  }
};

exports.login = async function (req, res) {
  try {
    var users = await AuthLoginService.login(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.validuser = async function (req, res) {
  try {
    var users = await AuthLoginService.validuser(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.logout = async function (req, res) {
  try {
    var users = await AuthLoginService.logout(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
