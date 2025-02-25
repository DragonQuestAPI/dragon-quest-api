const express = require("express");
const router = express.Router();

const routeSWITCH = require('./DQM3/SWITCH.js');

router.use("/SWITCH", routeSWITCH);

module.exports = router;