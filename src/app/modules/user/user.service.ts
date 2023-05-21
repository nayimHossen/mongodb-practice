import User from "./user.model";

export const createUserToDB = async () => {
  const user = new User({
    id: 5,
    role: "student",
    password: "password123",
    name: {
      firstName: "Shoriful",
      middleName: "Islam",
      lastName: "Perves",
    },
    dateOfBirth: "20/08/1999",
    email: "nayimh2015@gmail.com",
    contactNo: "01772936103",
    emergencyContactNo: "01730930440",
    presentAddress: "Mymensingh",
    permanentAddress: "Dhaka",
  });
  await user.save();
  return user;
};
