const Promo = require("../models/PromoModels.js");

exports.getPromo = async (req, res) => {
  try {
    const response = await Promo.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// exports.getPromoById = async (req, res) => {
//   try {
//     const response = await Promo.findOne({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.json(response);
//   } catch (error) {
//     console.log(error.message);
//   }
// };
