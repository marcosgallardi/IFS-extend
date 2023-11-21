const { authCtrl } = require("../../controllers/AuthCtrl/authCtrl");

const authHandler = async (req, res) => {
  const { username, password } = req.query;

  if (username && password) {
    let sequelize = await authCtrl(username, password);
    if (sequelize) {
      sequelize
        .authenticate()
        .then(() => {
          console.log("La conexión a la base de datos fue exitosa");
          res.status(200).json(true);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      res.status(200).json(false);
    }
  }else{
    return ("faltan datos")
  }
};

module.exports = { authHandler };
