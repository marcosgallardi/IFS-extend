const getInvoiceCtrl = async (series_id, invoice_no, identity) => {
  let sequelize = global.sequelize;

  try {
    if (series_id && invoice_no && identity) {
      let invoice = await sequelize.query(
        `SELECT * FROM snm_facturas_clientes_view WHERE series_id = '${series_id}' AND invoice_no = '${invoice_no}' AND IDENTITY = '${identity}'`
      );
      return invoice[0];
    } else {
      return "Faltan datos";
    }
  } catch (error) {
    // Handle the error and log it for debugging
    console.error(error);

    // Return an appropriate error message to the caller
    return { error: error.message };
  }
};

module.exports = getInvoiceCtrl;
