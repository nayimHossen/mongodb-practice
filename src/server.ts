import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

//database connection
const databaseConnection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice");
    console.log(`Database connection successful :)`);
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.log(`Failed to connected`, error);
  }
};

databaseConnection();
