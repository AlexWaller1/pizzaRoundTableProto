const { pizzas, businessPartners } = require("../sampleData.js");

// Mongoose Models
const Pizza = require("../models/Pizza");
const BusinessPartner = require("../models/BusinessPartner");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList
} = require("graphql");

// Pizza Type
const PizzaType = new GraphQLObjectType({
  name: "Pizza",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    businessPartner: {
      type: BusinessPartnersType,
      resolve(parent, args) {
        return BusinessPartner.findById(parent.businessPartnerId);
      }
    }
  })
});

// Business Partner Type
const BusinessPartnersType = new GraphQLObjectType({
  name: "BusinessPartner",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    pizzas: {
      type: new GraphQLList(PizzaType),
      resolve(parent, args) {
        return Pizza.find();
      }
    },
    pizza: {
      type: PizzaType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Pizza.findById(args.id);
      }
    },
    businessPartners: {
      type: new GraphQLList(BusinessPartnersType),
      resolve(parent, args) {
        return BusinessPartner.find();
      }
    },
    businessPartner: {
      type: BusinessPartnersType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return BusinessPartner.findById(args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
