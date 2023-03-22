// schema.js is the file where the GraphQL queries and mutations are

const { pizzas, businessPartners } = require("../sampleData.js");

// Mongoose Models
const Pizza = require("../models/Pizza");
const BusinessPartner = require("../models/BusinessPartner");
// models are imported here so they can be called for queries and mutations

// GraphQL data types that will be used to define data types for properties
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
    // todo: don't need businessPartner property for site
    businessPartner: {
      type: BusinessPartnersType,
      resolve(parent, args) {
        return BusinessPartner.findById(parent.businessPartnerId);
        // will use the businessPartnerId property of the Pizza object to
        // return the proper businessPartner object
      }
    }
  })
});
// defining what properties that instances of Pizza can have as they passed from the
// MongoDB server to the React frontend

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
// defining what properties a BusinessPartner object can have as it is passed from
// the MongoDB server to the React front end and the other way around

// Queries
// these are the GraphQL queries used for Pizza objects
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    pizzas: {
      type: new GraphQLList(PizzaType),
      resolve(parent, args) {
        return Pizza.find();
      }
    },
    // returns all of the Pizza objects
    // since all of the Pizza object are being returned, no args are necessary
    pizza: {
      type: PizzaType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Pizza.findById(args.id);
      }
    },
    // returns a single instance of a Pizza object
    // the Pizza object will be returned based on the id that is given as the argument
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
        Pizza.find({ businessPartnerId: args.id }).then(pizzas => {
          pizzas.forEach(pizza => {
            Pizza.findByIdAndRemove(pizza.id);
          });
        });
        return BusinessPartner.findByIdAndRemove(args.id);
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
        return pizza.save();
      }
    },
    // Delete a Pizza
    deletePizza: {
      type: PizzaType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        return Pizza.findByIdAndRemove(args.id);
      }
    },
    // Update a Pizza
    updatePizza: {
      type: PizzaType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            name: "PizzaStatusUpdate",
            values: {
              available: { value: "available" },
              notAvailable: { value: "not available" }
            }
          })
        }
      },
      resolve(parent, args) {
        return Pizza.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
              status: args.status
            }
          },
          { new: true }
          // if Pizza is not found in DB, then new Pizza will be created
        );
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
});
