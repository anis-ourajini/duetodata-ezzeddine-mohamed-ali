const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  HOST: process.env.DB_HOSTNAME,
  PORT : process.env.DB_PORT,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME
};

