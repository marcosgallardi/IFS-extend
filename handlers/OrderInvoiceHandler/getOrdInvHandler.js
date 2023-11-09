const getOrdInvCtrl = require("../../controllers/OrdInvCtrl/getOrdInvCtrl")

const getOrdInvHandler = async (req, res) => {
  try {
    const  data  = await getOrdInvCtrl();
    console.log(data,"data del handler")
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(400).json({ message: "no hay datos" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    throw error.message;
  }
};



module.exports = getOrdInvHandler