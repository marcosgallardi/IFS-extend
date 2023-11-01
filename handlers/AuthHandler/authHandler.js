const { authCtrl } = require("../../controllers/AuthCtrl/authCtrl");
const { stringify } = require('flatted');

let globalSequelize;

const authHandler = async (req, res) => {
  try {
    const { username, password } = req.body;
    let sequelize = await authCtrl(username, password);
    console.log(sequelize);
    globalSequelize = stringify(sequelize);
    
    res.status(200).json(globalSequelize);
  } catch (error) {
    res.status(400).json(false);
    console.log(error);
    //
    throw error.message;
  }
};

module.exports = { authHandler, globalSequelize };
