const Sequelize = require("sequelize");
const oracledb = require("oracledb");
require("dotenv").config();

// const { DB_HOST, DB_PORT } = process.env;
// const sequelize = new Sequelize("IFSARG1T", "IFSASNM", "ifs1", {
//     dialect: "oracle",
//     dialectOptions: {
//       thick: true, // Habilitar el modo Thick
//       connectString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=192.168.3.17)(PORT=1521))(CONNECT_DATA=(SID=IFSARG1T)))"
//     },
//   });

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

let clientOpts = {};
if (process.platform === "win32") {
  // Windows
  // If you use backslashes in the libDir string, you will7
  // need to double them.
  clientOpts = {
    libDir:
      "C:\\Users\\Marcos.Gallardi\\Desktop\\ControlerDataBase\\instantclient_11_2",
  };
} else if (process.platform === "darwin" && process.arch === "x64") {
  // macOS Intel
  clientOpts = {
    libDir: "C:\\Users\\Marcos.Gallardi\\Desktop\\ControlerDataBase\\instantclient_11_2",
  };
}
// else on other platforms like Linux the system library search path MUST always be
// set before Node.js is started, for example with ldconfig or LD_LIBRARY_PATH.

// enable node-oracledb Thick mode
oracledb.initOracleClient(clientOpts);

const sequelize = new Sequelize("IFSARG1T", "IFSASNM", "ifs1", {
  dialect: "oracle",
  dialectOptions: {
    connectString:
      "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=192.168.3.17)(PORT=1521))(CONNECT_DATA=(SID=IFSARG1T)))",
    thinkMode: true,
  },
});

module.exports = sequelize;

// const oracledb = require("oracledb");
// oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

// let clientOpts = {};
// if (process.platform === 'win32') {

//   // Windows
//   // If you use backslashes in the libDir string, you will7
//   // need to double them.
//   clientOpts = { libDir: 'C:\\Users\\Marcos.Gallardi\\Desktop\\ControlerDataBase\\instantclient_11_2' };
// } else if (process.platform === 'darwin' && process.arch === 'x64') {
//   // macOS Intel
//   clientOpts = { libDir: "C:\Users\Marcos.Gallardi\Desktop\ControlerDataBase\instantclient_11_2" };
// }
// // else on other platforms like Linux the system library search path MUST always be
// // set before Node.js is started, for example with ldconfig or LD_LIBRARY_PATH.

// // enable node-oracledb Thick mode
// oracledb.initOracleClient(clientOpts);

// const funct = async () => {
//   try {
//     let con = await oracledb.getConnection({
//       user: "IFSASNM",
//       password: "ifs1",
//       connectString: "192.168.3.17:1521/IFSARG1T",
//       thinkMode:true

//     });
//     const data = await con.execute("select * from ifsasnm.inventory_part_tab");
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// };
// funct()
