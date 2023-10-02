const express = require('express');
const router = express.Router();

const controller = require("./controller/ProgramController")



/* route init */

router.get('/programcontent', controller.getContentData);

router.post('/program', controller.addData)

module.exports = router;