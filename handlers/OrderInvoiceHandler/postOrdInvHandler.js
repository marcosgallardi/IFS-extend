const postOrdInvCtrl = require("../../controllers/OrdInvCtrl/postOrdInvCtrl");

const postOrdInvHandler = async (req, res) => {
  try {
    const data = req.body;
    console.log(data)

    if (data) {
      const carga = await postOrdInvCtrl(data);
      if (carga) {
        res.status(200).json({ message: "Se concilio con exito!" });
      } else {
        res.status(400).json({ message: "No se pudo conciliar!" });
      }
    } else {
      res.status(400).json({ message: "Faltan datos!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor!" });
    console.log(error);
    throw error.message;
  }
};

module.exports = postOrdInvHandler;
