// Top of the Application for the Server end of the Application
const express = require("express");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const port = process.env.PORT || 3019;

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

app.listen(port, console.log(`Server running on port ${port}`));
