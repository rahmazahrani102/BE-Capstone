const connection = require("./databases");
const sequelize = require("sequelize");

const content = connection.define(
  "content",
  {
    nama: { type: sequelize.DataTypes.STRING },
    deskripsi: { type: sequelize.DataTypes.TEXT },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = content;
