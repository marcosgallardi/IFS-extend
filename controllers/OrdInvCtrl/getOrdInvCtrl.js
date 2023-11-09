
const getOrdInvCtrl = async () => {
    let sequelize = global.sequelize;
    
    console.log(sequelize,"exist sequelize")
  try {
    const data = await sequelize.query("SELECT * FROM INVOICE_TAB");
    console.log(data, "data");
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getOrdInvCtrl;
