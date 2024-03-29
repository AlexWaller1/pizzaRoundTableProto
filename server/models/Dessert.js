const mongoose = require("mongoose");

const DessertSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Dessert", DessertSchema);
