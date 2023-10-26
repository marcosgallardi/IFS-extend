const sequelize = require("../../DB_connection");

const authCtrl = async (name, password) => {
  try {
    const result = await sequelize.query("SELECT * FROM sys.user$");

    const user = result[0].find((user) => user.NAME === name);
    console.log(user);
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = authCtrl;
//sys.user$
