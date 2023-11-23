const server = require("./app");
const {
  masiveCreateUsers,
} = require("./controllers/bulkCreate/masiveCreateUsers");

const sequelize = global.sequelize



require("dotenv").config();

const { PORT } = process.env;

server.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  //await masiveCreateUsers()
 

  // try {
  //   await sequelize.authenticate();
  //   console.log("Connection has been established successfully.");
  // } catch (error) {
  //   console.error("Unable to connect to the database:", error);
  // }
});
