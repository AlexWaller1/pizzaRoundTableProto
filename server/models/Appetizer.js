const mongoose = require("mongoose");

const AppetizerSchema = new mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: String
  }
});

module.exports = mongoose.model("Appetizer", AppetizerSchema);
