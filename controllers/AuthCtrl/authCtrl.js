const Sequelize = require("sequelize");

// NOMBRE DE LA TABLA: USER_IFS_EXTEND
//campos  user_id ,username, password
// nombre de la trigger para auincremetar el id: user_ifs_extend_trigger

let authCtrl = async (username, password) => {
  try {
    let sequelize = new Sequelize("IFSARG1T", username, password, {
      dialect: "oracle",
      dialectOptions: {
        connectString:
          "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=192.168.3.17)(PORT=1521))(CONNECT_DATA=(SID=IFSARG1T)))",
        thinkMode: true,
      },
    });

    await sequelize.sync({ alter: true });
    console.log("Database connected");

    global.sequelize = sequelize;

    return sequelize;
  } catch (error) {
    return false;
  }
};

module.exports = { authCtrl };
//sys.user$

