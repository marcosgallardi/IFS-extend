const rrhhNovCtrlPut = require("../../controllers/RRHHCtrl/rrhhNovCtrlPut");

const rrhhNovHandlerPut = (res, req) => {
  try {
    const { id, path } = req.body;
    const data = rrhhNovCtrlPut(id, path);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = rrhhNovHandlerPut;
