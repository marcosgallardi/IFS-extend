const postOrdInvCtrl = async (data) => {
  let sequelize = global.sequelize;
  try {
    const dataToArray = Object.values(data);

    const uploadPromises = dataToArray.map(async (element) => {
      let carga = await sequelize.query(
        `MERGE INTO snm_customer_order_invoice_tab target
         USING dual source
         ON (target.order_no = :order_no 
             AND target.line_no = :line_no 
             AND target.rel_no = :rel_no)
         WHEN MATCHED THEN
           UPDATE SET target.monto_conciliado = target.monto_conciliado + :elementValue
         WHEN NOT MATCHED THEN
           INSERT (order_no, line_no, rel_no, monto_conciliado) 
           VALUES (:order_no, :line_no, :rel_no, :elementValue);`,
        {
          replacements: {
            order_no: element.order_no,
            line_no: element.line_no,
            rel_no: element.rel_no,
            elementValue: element.value,
          },
        }
      );
      return carga;
    });

    const upLoadData = await Promise.all(uploadPromises);
   
    return upLoadData;
  } catch (error) {
    throw error.message;
  }
};

module.exports = postOrdInvCtrl;
