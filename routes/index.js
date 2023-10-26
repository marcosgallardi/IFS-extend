const express = require("express");
const authRouter = require("./user")

const router = express.Router();

router.use("/auth",authRouter)

module.exports = router;
