const { Router } = require("express");
const {authHandler} = require("../handlers/AuthHandler/authHandler");

const authRouter = Router();

authRouter.get("/",authHandler)


module.exports = authRouter