const express = require("express");
const router = express.Router();

const game = __filename.split("\\")[__filename.split("\\").length - 1].replace(".js", "");

const gameRoutes = require(`../routes/${game}/game.js`);
const accessoryRoutes = require(`../routes/${game}/accessories.js`);
const areaRoutes = require(`../routes/${game}/areas.js`);
const armorRoutes = require(`../routes/${game}/armors.js`);
const characterRoutes = require(`../routes/${game}/characters.js`);
const continentRoutes = require(`../routes/${game}/continents.js`);
const helmetRoutes = require(`../routes/${game}/helmets.js`);
const itemRoutes = require(`../routes/${game}/items.js`);
const monsterRoutes = require(`../routes/${game}/monsters.js`);
const shieldRoutes = require(`../routes/${game}/shields.js`);
const skillRoutes = require(`../routes/${game}/skills.js`);
const weaponRoutes = require(`../routes/${game}/weapons.js`);

router.use("/", gameRoutes);
router.use("/accessories", accessoryRoutes);
router.use("/areas", areaRoutes);
router.use("/armors", armorRoutes);
router.use("/characters", characterRoutes);
router.use("/continents", continentRoutes);
router.use("/helmets", helmetRoutes);
router.use("/items", itemRoutes);
router.use("/monsters", monsterRoutes);
router.use("/shields", shieldRoutes);
router.use("/skills", skillRoutes);
router.use("/weapons", weaponRoutes);

module.exports = router;