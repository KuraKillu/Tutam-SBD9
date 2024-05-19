const userController = require("../controllers/userController");
const express = require("express");
const userRouter = express.Router();

userRouter.post("/signUp", userController.signUp);
userRouter.post("/login", userController.login);
userRouter.get("/getUserId/:user_id", userController.getUserId);

module.exports = userRouter;