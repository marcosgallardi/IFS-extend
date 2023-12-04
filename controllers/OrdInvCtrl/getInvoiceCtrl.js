const getInvoiceCtrl = async (series_id, invoice_no, identity) => {
  let sequelize = global.sequelize;

  try {
    if (series_id && invoice_no) {
      let invoice = await sequelize.query(
        `SELECT * FROM snm_facturas_clientes_view WHERE series_id = '${series_id}' AND invoice_no = '${invoice_no}' and IDENTITY = '${identity}'`
      );
      return invoice[0];
    } else {
      return "Faltan datos";
    }
  } catch (error) {

    console.error(error);

    
    return { error: error.message };
  }
};

module.exports = getInvoiceCtrl;
