const express = require("express");
const router = express.Router();

const gameRoute = require(`./DQ5/game.js`);
const accessoryRoute = require(`./DQ5/accessories.js`);
const areaRoute = require(`./DQ5/areas.js`);
const armorRoute = require(`./DQ5/armors.js`);
const characterRoute = require(`./DQ5/characters.js`);
const continentRoute = require(`./DQ5/continents.js`);
const helmetRoute = require(`./DQ5/helmets.js`);
const itemRoute = require(`./DQ5/items.js`);
const monsterRoute = require(`./DQ5/monsters.js`);
const shieldRoute = require(`./DQ5/shields.js`);
const skillRoute = require(`./DQ5/skills.js`);
const weaponRoute = require(`./DQ5/weapons.js`);

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