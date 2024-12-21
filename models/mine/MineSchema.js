const mongoose = require("mongoose");

const mineSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    payment: {
      type: String,
      required: true,
    },
    realamount: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// model mine
const mine = new mongoose.model("mine", mineSchema);
module.exports = mine;
