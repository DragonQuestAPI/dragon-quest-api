const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
require("dotenv").config();

app.use(express.json());

const dqivRoute = require("./routes/DQ4.js");
const dqvRoute = require("./routes/DQ5.js");

app.use("/api/dqiv", dqivRoute);
app.use("/api/dqv", dqvRoute);

app.listen(process.env.PORT, () =>
  console.log(`Server started on http://localhost:${process.env.PORT}`)
);
