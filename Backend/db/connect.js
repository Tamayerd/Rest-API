const mongoose = require("mongoose");
require("dotenv").config();
const initialData = require("./data")

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI);
    initialData()
    console.log("Mongoose connected...");
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};
module.exports = connectDB;
