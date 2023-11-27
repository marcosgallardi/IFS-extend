const getInvoiceCtrl = require("../../controllers/OrdInvCtrl/getInvoiceCtrl");

const invoiceHandler = async (req, res) => {
  try {
    let { series_id, invoice_no, identity } = req.query;

    const invoice = await getInvoiceCtrl(series_id, invoice_no, identity);
    console.log(invoice, "log del invoice");
    if (invoice) {
      res.status(200).json(invoice);
    } else {
      res.status(404).json({ message: "No data yet" });
    }
  } catch (error) {
    res.status(500).json({ message: error });

    throw error.message;
  }
};

module.exports = invoiceHandler;
