const express = require("express");
const router = express.Router();

const routeDS = require('./DQ4/DS.js');
const routeNES = require('./DQ4/NES.js');
const routePS = require('./DQ4/PS.js');

router.use("/DS", routeDS);
router.use("/NES", routeNES);
router.use("/PS", routePS);

module.exports = router;