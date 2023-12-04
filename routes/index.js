const express = require("express");
const authRouter = require("./user");
const orderInvoice = require("./orderInvoice");
const invoiceRouter = require("./invoiceRouter");
const rrhhRouter = require("./rrhhRouter");
const getOrderHandler = require("../handlers/OrderInvoiceHandler/getOrderHandler");

const router = express.Router();

router.use("/auth", authRouter);
router.use("/invoice", invoiceRouter);
router.use("/order", getOrderHandler);
router.use("/rrhh", rrhhRouter);

router.use("/ordInv", orderInvoice);

module.exports = router;
