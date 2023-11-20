const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ElearnSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  category: 
    {
      type: Schema.Types.ObjectId,
      ref: "elearncategory",
      required: true,
    },
  
  desc: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
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
const elearning = new mongoose.model("elearning", ElearnSchema);

module.exports = elearning;
