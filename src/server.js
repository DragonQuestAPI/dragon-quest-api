const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
require("dotenv").config();

app.use(express.json());

const dq1Route = require("./routes/DQ1.js");
app.use("/api/DQI", dq1Route);

const dq2Route = require("./routes/DQ2.js");
app.use("/api/DQII", dq2Route);

const dq3Route = require("./routes/DQ3.js");
app.use("/api/DQIII", dq3Route);

const dq4Route = require("./routes/DQ4.js");
app.use("/api/DQIV", dq4Route);

const dq5Route = require("./routes/DQ5.js");
app.use("/api/DQV", dq5Route);

const dq6Route = require("./routes/DQ6.js");
app.use("/api/DQVI", dq6Route);

const dq7Route = require("./routes/DQ7.js");
app.use("/api/DQVII", dq7Route);

const dq8Route = require("./routes/DQ8.js");
app.use("/api/DQVIII", dq8Route);

const dq9Route = require("./routes/DQ9.js");
app.use("/api/DQIX", dq9Route);

const dq10Route = require("./routes/DQ10.js");
app.use("/api/DQX", dq10Route);

const dq11Route = require("./routes/DQ11.js");
app.use("/api/DQXI", dq11Route);

const dqm3Route = require("./routes/DQM3.js");
app.use("/api/DQM3", dqm3Route);

app.listen(process.env.PORT, () =>
  console.log(`Server started on http://localhost:${process.env.PORT}`)
);
