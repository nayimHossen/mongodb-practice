import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUserById, getUsersFromDB } from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const user = await createUserToDB(data);
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await getUsersFromDB();
  res.status(200).json({
    status: "success",
    data: users,
  });
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  console.log(id);

  const user = await getUserById(id);
  res.status(200).json({
    status: "success",
    data: user,
  });
};
