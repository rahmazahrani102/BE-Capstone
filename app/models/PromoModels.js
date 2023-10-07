const connection = require("./databases");
const sequelize = require("sequelize");

const { DataTypes } = sequelize;

const Promo = connection.define(
  "promo_card",
  {
    url: DataTypes.STRING,
    name: DataTypes.STRING,
    tanggal: DataTypes.STRING,
  },
  {
    freezeTableName: false,
    timestamps: false,
  }
);

module.exports = Promo;
