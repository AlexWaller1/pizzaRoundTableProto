// Schema for Review Model for MongoDB Server
const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  title: {
    type: String
  },
  stars: {
    type: String,
    enum: ["leave a star rating", "1", "2", "3", "4", "5"]
  },
  text: {
    type: String
  }
});

module.exports = mongoose.model("Review", ReviewSchema);
