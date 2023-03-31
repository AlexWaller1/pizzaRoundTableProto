// Schema for the Pizza Model for the MongoDB server

const mongoose = require("mongoose");

const PizzaSchema = new mongoose.Schema({
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
  // status: {
  //   type: String,
  //   enum: ["available", "not available"]
  // },
  // // todo: not needed for the site, let's get rid of it when edits start
  // businessPartnerId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "BusinessPartner"
  // }
  // todo: make sure to add an img property which has a data type of string
});

module.exports = mongoose.model("Pizza", PizzaSchema);
// exported so we can use the Pizza model in the schema, the string Pizza is
// so we can just call the model Pizza in the schema file
