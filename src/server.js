const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

// const characterRoutes = require("./routes/dqiv/characters.js");
// const weaponRoutes = require("./routes/dqiv/weapons.js");
// const helmetRoutes = require("./routes/dqiv/helmets.js");
// const armorRoutes = require("./routes/dqiv/armors.js");
// const shieldRoutes = require("./routes/dqiv/shields.js");
// const accessoryRoutes = require("./routes/dqiv/accessories.js");
// const itemRoutes = require("./routes/dqiv/items.js");
// const monsterRoutes = require("./routes/dqiv/monsters.js");

// app.use("/characters", characterRoutes);
// app.use("/weapons", weaponRoutes);
// app.use("/helmets", helmetRoutes);
// app.use("/armors", armorRoutes);
// app.use("/shields", shieldRoutes);
// app.use("/accessories", accessoryRoutes);
// app.use("/items", itemRoutes);
// app.use("/monsters", monsterRoutes);

const dqivRoute = require("./routes/dqiv.js");
const dqvRoute = require("./routes/dqv.js");
app.use("/dqiv", dqivRoute);
app.use("/dqv", dqvRoute);

app.listen(process.env.PORT, () =>
  console.log(`Server started on http://localhost:${process.env.PORT}`)
);
