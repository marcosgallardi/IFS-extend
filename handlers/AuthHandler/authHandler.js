const { authCtrl } = require("../../controllers/AuthCtrl/authCtrl");
const { stringify } = require("flatted");

let globalSequelize;

const authHandler = async (req, res) => {
  try {
    const username = req.query.username;
    const password = req.query.password;

    let sequelize = await authCtrl(username, password);

    globalSequelize = stringify(sequelize);
    let auth = await sequelize.authenticate();
    console.log(auth);
    res.status(200).json(auth);
  } catch (error) {
    res.status(400).json(false);
    console.log(error.message);
  }
};

module.exports = { authHandler, globalSequelize };
