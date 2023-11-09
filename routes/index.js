const express = require("express");
const authRouter = require("./user")
const orderInvoice = require("./orderInvoice")

const router = express.Router();

router.use("/auth",authRouter)

router.use("/ordInv",orderInvoice)

module.exports = router;
