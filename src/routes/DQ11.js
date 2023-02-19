const express = require("express");
const router = express.Router();

const gameRoute = require(`./DQ11/game.js`);

router.use("/", gameRoute);

module.exports = router;