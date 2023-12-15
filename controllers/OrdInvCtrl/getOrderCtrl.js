const getOrderCtrl = async (cliente) => {
  let sequelize = global.sequelize;
  try {
    const data = await sequelize.query(
      `SELECT * FROM SNM_CUSTOMER_ORDER_INVOICE_V  WHERE CUSTOMER_NO = '${cliente}' AND DATES > TO_DATE('01/10/2023', 'DD/MM/YYYY') AND STATE != 'cancelado'`
    );
    return data[0];
  } catch (error) {
    
    return error.message;
  
  }
};

module.exports = getOrderCtrl;
