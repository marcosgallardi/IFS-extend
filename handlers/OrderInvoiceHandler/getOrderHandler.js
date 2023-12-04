const getOrderCtrl = require("../../controllers/OrdInvCtrl/getOrderCtrl");

const getOrderHandler = async (req, res) => {
  try {
    const { cliente } = req.query;
    console.log(cliente);
    const data = await getOrderCtrl(cliente);
    console.log(data)
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "No se encontraron ordenes" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
    throw error(error);
  }
};

module.exports = getOrderHandler;
