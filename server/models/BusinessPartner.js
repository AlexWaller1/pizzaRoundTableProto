// setting up models and their attributes with their data types for MongoDB server
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
// exporting BusinessPartnerSchema so it can be used in the schema.js file
