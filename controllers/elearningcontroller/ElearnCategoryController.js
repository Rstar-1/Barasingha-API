const express = require("express");
const ElearnCategoryService = require("../../services/elearningservice/ElearnCategoryService");

exports.elearncategoryregister = async function (req, res) {
  try {
    var users = await ElearnCategoryService.elearncategoryregister(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Succesfully Users Retrieved",
    });
  } catch (error) {
    error;
  }
};

exports.getdatacategoryelearn = async function (req, res) {
  try {
    var users = await ElearnCategoryService.getdatacategoryelearn(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getsinglecategoryelearn = async function (req, res) {
  try {
    var users = await ElearnCategoryService.getsinglecategoryelearn(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.updatecategorydataelearn = async function (req, res) {
  try {
    var users = await ElearnCategoryService.updatecategorydataelearn(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.deletecategoryelearn = async function (req, res) {
  try {
    var users = await ElearnCategoryService.deletecategoryelearn(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
