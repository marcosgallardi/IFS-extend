const sequelize = require("../../DB_connection")

const masiveCreateUsers = async () => {
    
  
    await sequelize.query(
    "INSERT INTO USER_IFS_EXTEND (username, password) VALUES (?, ?)",
    ["WDECAUSM", "Wa0305d?"]
  );
};

module.exports = { masiveCreateUsers };
