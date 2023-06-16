const express = require("express");
const { login, register, checkUserExistence } = require("../controllers/user.controller");

const usersRouter = express.Router();

usersRouter.post("/login", login);
usersRouter.post("/register", register);
usersRouter.get('/check', checkUserExistence);


module.exports = usersRouter;
