const express = require('express');
const router = express.Router();

const controller = require("./controller/ProgramController")
const { getPromo, getPromoById, savePromo, updatePromo, deletePromo } = require("./controller/PromoController");



/* route init */

router.get('/programcontent', controller.getContentData);

router.post('/daftar', controller.addData)

router.get("/Promo", getPromo);

router.get("/Promo/:id", getPromoById);

router.post("/Promo", savePromo);

router.patch("/Promo/:id", updatePromo);

router.delete("/Promo/:id", deletePromo);

module.exports = router;