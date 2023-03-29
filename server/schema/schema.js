// schema.js is the file where the GraphQL queries and mutations are

const { pizzas, businessPartners } = require("../sampleData.js");
// sample data no longer being used

// Mongoose Models
const Pizza = require("../models/Pizza");
const BusinessPartner = require("../models/BusinessPartner");
const Appetizer = require("../models/Appetizer");
const Beverage = require("../models/Beverage");
const Dessert = require("../models/Dessert");
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

// Appetizer Type
const AppetizerType = new GraphQLObjectType({
  name: "Appetizer",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    image: { type: GraphQLString },
    price: { type: GraphQLString }
  })
});

// Beverage Type
const BeverageType = new GraphQLObjectType({
  name: "Beverage",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    image: { type: GraphQLString },
    price: { type: GraphQLString }
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
      // returns all businessPartners, so now argument needed
    },
    businessPartner: {
      type: BusinessPartnersType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return BusinessPartner.findById(args.id);
      }
      // returns a single instance of a BusinessPartner based on the argument
      // of the id going into the query
    }
  }
});

// for posting, updating, and deleting data
// Mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Add a Business Partner
    addBusinessPartner: {
      type: BusinessPartnersType,
      // objects posted using this query must abide by the BusinessPartners type
      // meaning that the objects posted must have certain properties, and are
      // not allowed to have others
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) }
      },
      // the properties that are being posted and their data types
      // GraphQLNonNull means that we must enter a value for these
      // properties or the query will not proceed
      resolve(parent, args) {
        const businessPartner = new BusinessPartner({
          name: args.name,
          email: args.email,
          phone: args.phone
        });
        // creating new instance of the BusinessPartner model with required
        // and posted data
        return businessPartner.save();
        // will save new instance to MongoDB server and return the new instance
      }
    },
    // Delete a Business Partner
    deleteBusinessPartner: {
      type: BusinessPartnersType,
      // BusinessPartnerObjects must abide by the BusinessPartnersType properties
      args: {
        id: { type: GraphQLNonNull(GraphQLID) }
      },
      // we must include the id as an argument so MongoDB knows which
      // businessPartner object to delete
      resolve(parent, args) {
        Pizza.find({ businessPartnerId: args.id }).then(pizzas => {
          pizzas.forEach(pizza => {
            Pizza.findByIdAndRemove(pizza.id);
          });
        });
        return BusinessPartner.findByIdAndRemove(args.id);
      }
      // todo: we don't need to worry about deleting the Pizza when a business partner
      // is deleted
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
        // this is how an enum is set up, we have to say what the values are,
        // as well as what we want the default value to be in the dropdown menu
        businessPartnerId: { type: GraphQLNonNull(GraphQLID) }
        // todo: don't need this
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
      // same deal as businessPartner, create a new Pizza object, with and assign the
      // posted data to the new object's values
      // then we save to MongoDB and return new object
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
      // same as deleteBusinessPartner
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
          // needs to include the id here since we need to find which pizza object
          // to update, not sure why $set must used but can look into that
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
// RootQuery and mutation are both objects that must assigned to the query and
// mutation properties of the object that is the argument of our GraphQLSchema instance
