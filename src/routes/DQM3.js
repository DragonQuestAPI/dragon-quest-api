const express = require("express");
const router = express.Router();

const gameRoute = require(`./DQM3/game.js`);
const areaRoute = require(`./DQM3/areas.js`);
const itemRoute = require(`./DQM3/items.js`);
const monsterRoute = require(`./DQM3/monsters.js`);
const skillRoute = require(`./DQM3/skills.js`);
const traitsRoute = require(`./DQM3/traits.js`);
const talentsRoute = require(`./DQM3/talents.js`);

router.use("/", gameRoute);
router.use("/areas", areaRoute);
router.use("/items", itemRoute);
router.use("/monsters", monsterRoute);
router.use("/skills", skillRoute);
router.use("/traits", traitsRoute);
router.use("/talents", talentsRoute);

module.exports = router;