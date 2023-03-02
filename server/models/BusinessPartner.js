const mongoose = require("mongoose");

const BusinessPartnerSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  }
});

module.exports = mongoose.model("BusinessPartner", BusinessPartnerSchema);
