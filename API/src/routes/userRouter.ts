import { Router } from "express";
import userController from "../controllers/userController";

const userRouter = Router();

userRouter.get("/", userController.getUsers);
userRouter.post("/auth", userController.getUser);

export default userRouter;
