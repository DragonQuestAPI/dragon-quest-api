const express = require("express");
const app = express();
const fs = require("fs"); // File system
const path = require("path");
require("dotenv").config();

const pathMonstersJSON = path.join(__dirname, "/data/monsters.json");
const monsters = JSON.parse(fs.readFileSync(pathMonstersJSON).toString());

const characterRoutes = require("./routes/characters.js");
const weaponRoutes = require("./routes/weapons.js");
const helmetRoutes = require("./routes/helmets.js");
const armorRoutes = require("./routes/armors.js");
const shieldRoutes = require("./routes/shields.js");
const accessoryRoutes = require("./routes/accessories.js");
const itemRoutes = require("./routes/items.js");
const monsterRoutes = require("./routes/monsters.js");

app.use(express.json());

app.use("/characters", characterRoutes);
app.use("/weapons", weaponRoutes);
app.use("/helmets", helmetRoutes);
app.use("/armors", armorRoutes);
app.use("/shields", shieldRoutes);
app.use("/accessories", accessoryRoutes);
app.use("/items", itemRoutes);
app.use("/monsters", monsterRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server started on http://localhost:${process.env.PORT}`)
);
