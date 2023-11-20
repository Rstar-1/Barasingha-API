const express = require("express");
const Blogservice = require("../../services/blogservice/BlogService");

exports.blogregister = async function (req, res) {
  try {
    var users = await Blogservice.blogregister(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Succesfully Users Retrieved",
    });
  } catch (error) {
    error;
  }
};

exports.getdata = async function (req, res) {
  try {
    var users = await Blogservice.getdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.getsingledata = async function (req, res) {
  try {
    var users = await Blogservice.getsingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.updatedata = async function (req, res) {
  try {
    var users = await Blogservice.updatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.deletedata = async function (req, res) {
  try {
    var users = await Blogservice.deletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

