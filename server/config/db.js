// this is where we connect to the MongoDB server, and also
// where we log which host we are connected to
const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
// the connectDB() function is exported to index.js where it is called
