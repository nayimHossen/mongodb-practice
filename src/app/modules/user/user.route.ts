import express from "express";
import { createUser } from "./user.controller";
import { getUsers } from "./user.controller";
import { getUser } from "./user.controller";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/create-user", createUser);

export default router;
