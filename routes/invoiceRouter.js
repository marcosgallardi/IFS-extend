const { Router } = require("express");
const invoiceHandler = require("../handlers/OrderInvoiceHandler/invoiceHandler");


const invoiceRouter = Router();


invoiceRouter.get("/",invoiceHandler)


module.exports = invoiceRouter;

