// schema.js is the file where the GraphQL queries and mutations are

const { pizzas, businessPartners } = require("../sampleData.js");
// sample data no longer being used

// Mongoose Models
const Pizza = require("../models/Pizza");
const BusinessPartner = require("../models/BusinessPartner");
const Appetizer = require("../models/Appetizer");
const Beverage = require("../models/Beverage");
const Dessert = require("../models/Dessert");
const Review = require("../models/Review");
const Cart = require("../models/Cart");
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
    image: { type: GraphQLString },
    price: { type: GraphQLString }

    // status: { type: GraphQLString },
    // todo: don't need businessPartner property for site

    // businessPartner: {
    //   type: BusinessPartnersType,
    //   resolve(parent, args) {
    //     return BusinessPartner.findById(parent.businessPartnerId);

    //     // will use the businessPartnerId property of the Pizza object to
    //     // return the proper businessPartner object
    //   }
    // }
  })
});
// defining what properties that instances of Pizza can have as they passed from the
// MongoDB server to the React frontend

// ReviewType
const ReviewType = new GraphQLObjectType({
  name: "Review",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    stars: { type: GraphQLString },
    text: { type: GraphQLString }
  })
});

// Cart Type
const CartType = new GraphQLObjectType({
  name: "Cart",
  fields: () => ({
    id: { type: GraphQLID },
    itemId: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    image: { type: GraphQLString },
    price: { type: GraphQLString }
  })
});

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

// Dessert Type
const DessertType = new GraphQLObjectType({
  name: "Dessert",
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
    carts: {
      type: new GraphQLList(CartType),
      resolve(parent, args) {
        return Cart.find();
      }
    },
    cart: {
      type: CartType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Cart.findById(args.id);
      }
    },
    reviews: {
      type: new GraphQLList(ReviewType),
      resolve(parent, args) {
        return Review.find();
      }
    },
    review: {
      type: ReviewType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Review.findById(args.id);
      }
    },
    appetizers: {
      type: new GraphQLList(AppetizerType),
      resolve(parent, args) {
        return Appetizer.find();
      }
    },
    appetizer: {
      type: AppetizerType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Appetizer.findById(args.id);
      }
    },
    beverages: {
      type: new GraphQLList(BeverageType),
      resolve(parent, args) {
        return Beverage.find();
      }
    },
    beverage: {
      type: BeverageType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Beverage.findById(args.id);
      }
    },
    desserts: {
      type: new GraphQLList(DessertType),
      resolve(parent, args) {
        return Dessert.find();
      }
    },
    dessert: {
      type: DessertType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Dessert.findById(args.id);
      }
    },
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
    addReview: {
      type: ReviewType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        stars: {
          type: new GraphQLEnumType({
            name: "StarStatus",
            values: {
              leaveStarRating: { value: "leave a star rating" },
              one: { value: "1" },
              two: { value: "2" },
              three: { value: "3" },
              four: { value: "4" },
              five: { value: "5" }
            }
          }),
          defaultValue: "leave a star rating"
        },
        text: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        const review = new Review({
          title: args.title,
          stars: args.stars,
          text: args.text
        });
        return review.save();
      }
    },
    deleteReview: {
      type: ReviewType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Review.findByIdAndDelete(args.id);
      }
    },
    updateReview: {
      type: ReviewType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLNonNull(GraphQLString) },
        stars: {
          type: new GraphQLEnumType({
            name: "StarStatusUpdate",
            values: {
              leaveStarRating: { value: "leave a star rating" },
              one: { value: "1" },
              two: { value: "2" },
              three: { value: "3" },
              four: { value: "4" },
              five: { value: "5" }
            }
          })
        },
        text: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        return Review.findByIdAndUpdate(
          args.id,
          {
            $set: {
              title: args.title,
              stars: args.stars,
              text: args.text
            }
          },
          { new: true }
        );
      }
    },
    addCart: {
      type: CartType,
      args: {
        itemId: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLNonNull(GraphQLString) },
        price: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        const cart = new Cart({
          itemId: args.itemId,
          name: args.name,
          description: args.description,
          image: args.image,
          price: args.price
        });
        return cart.save();
      }
    },
    deleteCarts: {
      type: CartType,
      resolve(parent, args) {
        return Cart.deleteMany({});
      }
    },
    deleteCart: {
      type: CartType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        return Cart.findByIdAndRemove(args.id);
      }
    },
    addAppetizer: {
      type: AppetizerType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLNonNull(GraphQLString) },
        price: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        const appetizer = new Appetizer({
          name: args.name,
          description: args.description,
          image: args.image,
          price: args.price
        });
        return appetizer.save();
      }
    },
    deleteAppetizer: {
      type: AppetizerType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        return Appetizer.findByIdAndRemove(args.id);
      }
    },
    updateAppetizer: {
      type: AppetizerType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        image: { type: GraphQLString },
        price: { type: GraphQLString }
      },
      resolve(parent, args) {
        return Appetizer.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
              image: args.image,
              price: args.price
            }
          },
          { new: true }
        );
      }
    },
    addBeverage: {
      type: BeverageType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLNonNull(GraphQLString) },
        price: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        const beverage = new Beverage({
          name: args.name,
          description: args.description,
          image: args.image,
          price: args.price
        });
        return beverage.save();
      }
    },
    deleteBeverage: {
      type: BeverageType,
      args: { id: { type: GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Beverage.findByIdAndDelete(args.id);
      }
    },
    updateBeverage: {
      type: BeverageType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLNonNull(GraphQLString) },
        price: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        return Beverage.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
              image: args.image,
              price: args.price
            }
          },
          { new: true }
        );
      }
    },
    addDessert: {
      type: DessertType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLNonNull(GraphQLString) },
        price: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        const dessert = new Dessert({
          name: args.name,
          description: args.description,
          image: args.image,
          price: args.price
        });
        return dessert.save();
      }
    },
    deleteDessert: {
      type: DessertType,
      args: { id: { type: GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Dessert.findByIdAndDelete(args.id);
      }
    },
    updateDessert: {
      type: DessertType,
      args: {
        id: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLNonNull(GraphQLString) },
        price: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        return Dessert.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
              image: args.image,
              price: args.price
            }
          },
          { new: true }
        );
      }
    },
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
        return BusinessPartner.findByIdAndRemove(args.id);
      }
    },
    // Add a Pizza
    addPizza: {
      type: PizzaType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLNonNull(GraphQLString) },
        price: { type: GraphQLNonNull(GraphQLString) }
        // status: {
        //   type: new GraphQLEnumType({
        //     name: "PizzaStatus",
        //     values: {
        //       available: { value: "available" },
        //       notAvailable: { value: "not available" }
        //     }
        //   }),
        //   defaultValue: "available"
        // },
        // businessPartnerId: { type: GraphQLNonNull(GraphQLID) }
        // todo: don't need this
      },
      resolve(parent, args) {
        const pizza = new Pizza({
          name: args.name,
          description: args.description,
          image: args.image,
          price: args.price
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
      // same as deleteBusinessPartner
    },
    // Update a Pizza
    updatePizza: {
      type: PizzaType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        image: { type: GraphQLString },
        price: { type: GraphQLString }
        // status: {
        //   type: new GraphQLEnumType({
        //     name: "PizzaStatusUpdate",
        //     values: {
        //       available: { value: "available" },
        //       notAvailable: { value: "not available" }
        //     }
        //   })
        // }
      },
      resolve(parent, args) {
        return Pizza.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
              image: args.image,
              price: args.price
            }
          },
          { new: true }
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
