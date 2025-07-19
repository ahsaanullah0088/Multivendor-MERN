const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });

const connectDatabase = () => {
  if (!process.env.DB_URL) {
    console.error("DB_URL is not defined in environment variables");
    process.exit(1);
  }

  mongoose
    .connect(process.env.DB_URL)
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error);
    });
};
module.exports = connectDatabase;
