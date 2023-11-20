const mongoose = require("mongoose");

const ElearnSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default:true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

// model
const elearncategory = new mongoose.model("elearncategory", ElearnSchema);

module.exports = elearncategory;
