const mongoose = require("mongoose");

const PizzaSchema = new mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  status: {
    type: String,
    enum: ["available", "not available"]
  },
  businessPartnerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BusinessPartner"
  }
});

module.exports = mongoose.model("Pizza", PizzaSchema);
