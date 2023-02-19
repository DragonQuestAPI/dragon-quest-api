const express = require("express");
const router = express.Router();

const gameRoute = require(`./DQ2/game.js`);

router.use("/", gameRoute);

module.exports = router;