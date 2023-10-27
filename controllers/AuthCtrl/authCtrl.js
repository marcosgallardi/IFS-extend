const sequelize = require("../../DB_connection");
const bcrypt = require("bcryptjs");

const authCtrl = async (name, password) => {
  try {
    const result = await sequelize.query("SELECT * FROM sys.user$");

    const user = result[0].find((user) => user.NAME === name);
    const encryptedPassword = user.PASSWORD;
    console.log(encryptedPassword);

    const isPasswordValid = await bcrypt.compare(password, encryptedPassword);
    console.log(isPasswordValid);
    console.log(user);
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = authCtrl;
//sys.user$
