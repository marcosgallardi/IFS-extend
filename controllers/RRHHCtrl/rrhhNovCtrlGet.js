const rrhhNovCtrlGet = async () => {
  let sequelize = global.sequelize;
  let sql = `SELECT * FROM SNM_RRHH_NOV`;

  const data = await sequelize.query(sql);
  return data;
};

module.exports = rrhhNovCtrlGet;
