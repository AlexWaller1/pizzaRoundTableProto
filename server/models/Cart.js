const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  itemId: {
    type: String
  },
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

module.exports = mongoose.model("Cart", CartSchema);
