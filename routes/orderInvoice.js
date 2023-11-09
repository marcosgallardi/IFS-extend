const { Router } = require("express");
const getOrdInvHandler = require("../handlers/OrderInvoiceHandler/getOrdInvHandler");


const ordInvRouter = Router();

ordInvRouter.get("/",getOrdInvHandler)

module.exports = ordInvRouter;