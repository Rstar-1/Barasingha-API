const express = require("express");
const ElearnService = require("../../services/elearningservice/ElearnService");

exports.elearnregister = async function (req, res) {
  try {
    var users = await ElearnService.elearnregister(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Succesfully Users Retrieved",
    });
  } catch (error) {
    error;
  }
};

exports.getdataelearn = async function (req, res) {
  try {
    var users = await ElearnService.getdataelearn(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getsingledataelearn = async function (req, res) {
  try {
    var users = await ElearnService.getsingledataelearn(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.updatedataelearn = async function (req, res) {
  try {
    var users = await ElearnService.updatedataelearn(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.deletedataelearn = async function (req, res) {
  try {
    var users = await ElearnService.deletedataelearn(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
