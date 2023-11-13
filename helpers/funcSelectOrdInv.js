const funcSelectOrd = async () => {
  let sequelize = global.sequelize;
  const data = await sequelize.query(`SELECT ${column} from ${table}`);
};

const funcSelectInv = async () => {
  let sequelize = global.sequelize;
  const table = "snm_facturas_clientes_view";
  const column = ["company", "identity", "currency", "party_type", "series_id"];

  let data = [];

  for (let i = 0; i < column.length; i++) {
    let select = await sequelize.query(`SELECT DISTINCT ${column[i]} from ${table}`);
    data = [...data, select];
  }
  return data;
};

module.exports = { funcSelectOrd, funcSelectInv };
