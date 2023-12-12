const rrhhNovCtrlPut = async (id, url) => {
  try {
    let sequelize = global.sequelize;
    let data = await sequelize.query(
      `UPDATE SNM_RRHH_NOV SET url = '${url}' WHERE id = ${id}`,
      { type: sequelize.QueryTypes.UPDATE }
    );
    return data;
  } catch (error) {
    throw error.message;
  }
};

module.exports = rrhhNovCtrlPut;
