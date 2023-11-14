const express = require("express");
const authRouter = require("./user")
const orderInvoice = require("./orderInvoice")
const invoiceRouter = require("./invoiceRouter")

const router = express.Router();

router.use("/auth",authRouter)
router.use("/invoice",invoiceRouter)


router.use("/ordInv",orderInvoice)

module.exports = router;
