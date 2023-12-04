const { Router } = require("express");
const rrhhNovHandlerGet = require("../handlers/RRHH/rrhhNovHandlerGet");
const rrhhNovHandlerPut = require("../handlers/RRHH/rrhhNovHandlerPut");

const rrhhRouter = Router();

rrhhRouter.get("/nov", rrhhNovHandlerGet);
rrhhRouter.put("/nov",rrhhNovHandlerPut)

module.exports = rrhhRouter;
