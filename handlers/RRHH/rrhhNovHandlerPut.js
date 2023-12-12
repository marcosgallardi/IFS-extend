const rrhhNovCtrlPut = require("../../controllers/RRHHCtrl/rrhhNovCtrlPut");

const rrhhNovHandlerPut = async (res, req) => {
  try {
    const { id, url } = req.body;
    const data = await rrhhNovCtrlPut(id, url);
    if (data) {
      res.status(200).json({ message: "Modificado con exito" });
    } else {
      res.status(400).json({ message: "No se pudo modificar" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = rrhhNovHandlerPut;
