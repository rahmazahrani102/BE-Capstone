const express = require("express");
const router = express.Router();

const controller = require("./controller/ProgramController");
const { getPromo } = require("./controller/PromoController");

/* route init */

router.get("/programcontent", controller.getContentData);

router.post("/daftar", controller.addData);

router.get("/Promo", getPromo);

module.exports = router;