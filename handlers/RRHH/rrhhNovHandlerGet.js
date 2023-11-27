const rrhhNovHandlerGet = async(res, req) => {
    try {
     const data = await rrhhNovCtrlGet()
     res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

module.exports = rrhhNovHandlerGet;
