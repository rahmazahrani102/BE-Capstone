const sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const connection = new sequelize.Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql",
  logging: false,
});

module.exports = connection;
