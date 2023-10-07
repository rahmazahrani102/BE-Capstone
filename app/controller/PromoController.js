const Promo = require("../models/PromoModels.js");

exports.getPromo = async (req, res) => {
  try {
    const response = await Promo.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};