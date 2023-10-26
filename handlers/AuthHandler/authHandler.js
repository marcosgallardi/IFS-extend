const authCtrl = require("../../controllers/AuthCtrl/authCtrl");

const authHandler = async (req, res) => {
  try {
    const { name, password } = req.body;
    const  result  = await authCtrl("MFARZANI", password);
    console.log(result,"acaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    res.status(200).json(result);
  } catch (error) {
    throw error.message;
  }
};

module.exports = authHandler;
