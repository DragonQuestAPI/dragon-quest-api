const express = require("express");
const router = express.Router();

const gameRoute = require(`./DQ9/game.js`);

router.use("/", gameRoute);

module.exports = router;