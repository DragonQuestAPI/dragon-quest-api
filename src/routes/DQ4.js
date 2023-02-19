const express = require("express");
const router = express.Router();

const gameRoute = require(`./DQ4/game.js`);
const accessoryRoute = require(`./DQ4/accessories.js`);
const areaRoute = require(`./DQ4/areas.js`);
const armorRoute = require(`./DQ4/armors.js`);
const characterRoute = require(`./DQ4/characters.js`);
const continentRoute = require(`./DQ4/continents.js`);
const helmetRoute = require(`./DQ4/helmets.js`);
const itemRoute = require(`./DQ4/items.js`);
const monsterRoute = require(`./DQ4/monsters.js`);
const shieldRoute = require(`./DQ4/shields.js`);
const skillRoute = require(`./DQ4/skills.js`);
const weaponRoute = require(`./DQ4/weapons.js`);

router.use("/", gameRoute);
router.use("/accessories", accessoryRoute);
router.use("/areas", areaRoute);
router.use("/armors", armorRoute);
router.use("/characters", characterRoute);
router.use("/continents", continentRoute);
router.use("/helmets", helmetRoute);
router.use("/items", itemRoute);
router.use("/monsters", monsterRoute);
router.use("/shields", shieldRoute);
router.use("/skills", skillRoute);
router.use("/weapons", weaponRoute);

module.exports = router;