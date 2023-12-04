const getOrderCtrl = async (cliente) => {
  let sequelize = global.sequelize;
  try {
    const data = await sequelize.query(
      `SELECT * FROM SNM_ORDEN_VENTA_VIEW  WHERE CUSTOMER_NO = '${cliente}'`
    );
    return data[0];
  } catch (error) {
    
    return error.message;
  
  }
};

module.exports = getOrderCtrl;
