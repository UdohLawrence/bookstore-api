require('dotenv').config();
const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING);
    console.log("Database Connected Successfully!");
  } catch (error) {
    console.log("Error connecting to Database -> ", error);
    process.exit(1);
  }
};

module.exports = connectToDB;