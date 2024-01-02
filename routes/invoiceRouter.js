const { Router } = require("express");
const invoiceHandler = require("../handlers/OrderInvoiceHandler/invoiceHandler");
const postOrdInvHandler = require("../handlers/OrderInvoiceHandler/postOrdInvHandler");

const invoiceRouter = Router();

invoiceRouter.get("/", invoiceHandler);
invoiceRouter.post("/post", postOrdInvHandler);

module.exports = invoiceRouter;
