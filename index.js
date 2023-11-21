const server = require("./app");

const sequelize = global.sequelize;

require("dotenv").config();

const { PORT } = process.env;

server.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
});
