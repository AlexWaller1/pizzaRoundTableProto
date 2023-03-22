// 'npm run dev' to start

// Top of the Application for the Server end of the Application
const express = require("express");
// to use Express.js
const colors = require("colors");
// just connectDB() function can log important message to console in color with
// bold and underlined font
const cors = require("cors");
// allows localhost port to access api data
require("dotenv").config();
// allows to call on .env file so we don't have to share delicate information
const { graphqlHTTP } = require("express-graphql");
// function that is used to enable use of schema, used in app.use() function
const schema = require("./schema/schema");
// importing schema file so we can use it in our application
const connectDB = require("./config/db");
// connects MongoDB server
const port = process.env.PORT || 3019;
// let's app know what localhost port to use

const app = express();
// Using Express.js

// Connect to database
connectDB();
// connects to Mongo database that was set up on site

app.use(cors());
// allows localhost to access data from api

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development"
  })
);
// setting up our app to use GraphQL as long NODE_ENV from .env is equal to "development"
// also important to know that we are setting up our schema here, which is where our
// queries and mutations are coming from, it is the schema file that connects the
// GraphQL mutations and queries with the MongoDB server

app.listen(port, console.log(`Server running on port ${port}`));
// where the app listens for the localhost port that will be run on during development
