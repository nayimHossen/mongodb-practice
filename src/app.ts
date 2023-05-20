import cors from "cors";

import express, { Application, NextFunction, Request, Response } from "express";
import { Schema, model } from "mongoose";

const app: Application = express();

//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  //inserting a test data into mongodb
  /*
   * step1: Interface
   * step2: Schema
   * step3: Model
   * step4: Database Query
   */

  //Creating a interface
  interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender?: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
  }

  //creating schema
  const userSchema = new Schema<IUser>({
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: { type: String, required: true },
    password: { type: String, required: true },
    name: {
      firstName: { type: String, required: true },
      middleName: { type: String },
      lastName: { type: String, required: true },
    },
    dateOfBirth: { type: String },

    email: { type: String },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
  });

  //create model
  const User = model<IUser>("User", userSchema);

  const createUserToDB = async () => {
    const user = new User({
      id: 2,
      role: "student",
      password: "password123",
      name: {
        firstName: "Md.",
        middleName: "Nayim",
        lastName: "Hossen",
      },
      dateOfBirth: "20/08/1999",
      email: "nayimh2015@gmail.com",
      contactNo: "01772936103",
      emergencyContactNo: "01730930440",
      presentAddress: "Mymensingh",
      permanentAddress: "Dhaka",
    });
    await user.save();
    console.log(user);
  };

  createUserToDB();
});

export default app;
