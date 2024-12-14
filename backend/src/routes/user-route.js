import express from "express";
import User from "../controllers/user-controller.js";

const UserRouter = express.Router();

// get all user
UserRouter.get("/", User.index);

// insert user
UserRouter.post("/", User.store);

// show user by id
UserRouter.get("/:id", User.show);

// update user
UserRouter.put("/:id/:userId", User.update);

// delete user
UserRouter.delete("/:id", User.destroy);

export default UserRouter;
