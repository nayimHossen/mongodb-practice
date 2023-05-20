const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

//database connection

const databaseConnection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice");
    console.log(`Database connection successful :)`);
  } catch (error) {
    console.log(`Failed to connected`, error);
  }
};

databaseConnection();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
