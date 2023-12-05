const getOrderCtrl = async (cliente) => {
  let sequelize = global.sequelize;
  try {
    const data = await sequelize.query(
      `SELECT * FROM SNM_ORDEN_VENTA_VIEW  WHERE CUSTOMER_NO = '${cliente}' AND S.DATES > TO_DATE('01/10/2023', 'DD/MM/YYYY') AND S.STATE != 'cancelado'`
    );
    return data[0];
  } catch (error) {
    
    return error.message;
  
  }
};

module.exports = getOrderCtrl;
