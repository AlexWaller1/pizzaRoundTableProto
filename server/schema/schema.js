const { pizzas, businessPartners } = require("../sampleData.js");

// Mongoose Models
const Pizza = require("../models/Pizza");
const BusinessPartner = require("../models/BusinessPartner");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType
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

// Queries
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

// Mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Add a Business Partner
    addBusinessPartner: {
      type: BusinessPartnersType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        const businessPartner = new BusinessPartner({
          name: args.name,
          email: args.email,
          phone: args.phone
        });
        return businessPartner.save();
      }
    },
    // Delete a Business Partner
    deleteBusinessPartner: {
      type: BusinessPartnersType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        return BusinessPartner.findByIdAndDelete(args.id);
      }
    },
    // Add a Pizza
    addPizza: {
      type: PizzaType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: "PizzaStatus",
            values: {
              available: { value: "available" },
              notAvailable: { value: "not available" }
            }
          }),
          defaultValue: "available"
        },
        businessPartnerId: { type: GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        const pizza = new Pizza({
          name: args.name,
          description: args.description,
          status: args.status,
          businessPartnerId: args.businessPartnerId
        });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
});
