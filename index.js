const server = require("./app");
const {
  masiveCreateUsers,
} = require("./controllers/bulkCreate/masiveCreateUsers");

const {globalSequelize} = require("./handlers/AuthHandler/authHandler")

console.log(globalSequelize,"acaaaaaaaaaaaaa")

require("dotenv").config();

const { PORT } = process.env;

server.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  //await masiveCreateUsers()
  await globalSequelize?.sync({ alter: true });

  // try {
  //   await sequelize.authenticate();
  //   console.log("Connection has been established successfully.");
  // } catch (error) {
  //   console.error("Unable to connect to the database:", error);
  // }

  console.log("Database connected");
});
