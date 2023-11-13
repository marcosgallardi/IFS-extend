const {funcSelectInv}  = require("../../helpers/funcSelectOrdInv")
// vista de la orden SNM_ORDEN_VENTAS_VIEW
//vista de la factura SNM_FACTURAS_CLIENTES_VIEW
const getOrdInvCtrl = async () => {
    let sequelize = global.sequelize;
    
    console.log(sequelize,"exist sequelize")
  try {
    const data = await funcSelectInv()
    console.log(data, "data");
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getOrdInvCtrl;
