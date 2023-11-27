const { Router } = require("express");
const rrhhNovHandlerGet = require("../handlers/RRHH/rrhhNovHandlerGet");

const rrhhRouter = Router();

rrhhRouter.get("/nov", rrhhNovHandlerGet);

module.exports = rrhhRouter;
