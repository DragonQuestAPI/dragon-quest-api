const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
require("dotenv").config();

app.use(express.json());

const dq1Route = require("./routes/DQ1.js");
const dq2Route = require("./routes/DQ2.js");
const dq3Route = require("./routes/DQ3.js");
const dq4Route = require("./routes/DQ4.js");
const dq5Route = require("./routes/DQ5.js");
const dq6Route = require("./routes/DQ6.js");
const dq7Route = require("./routes/DQ7.js");
const dq8Route = require("./routes/DQ8.js");
const dq9Route = require("./routes/DQ9.js");
const dq10Route = require("./routes/DQ10.js");
const dq11Route = require("./routes/DQ11.js");

app.use("/api/dqi", dq1Route);
app.use("/api/dqii", dq2Route);
app.use("/api/dqiv", dq3Route);
app.use("/api/dqiv", dq4Route);
app.use("/api/dqv", dq5Route);
app.use("/api/dqvi", dq6Route);
app.use("/api/dqvii", dq7Route);
app.use("/api/dqviii", dq8Route);
app.use("/api/dqix", dq9Route);
app.use("/api/dqx", dq10Route);
app.use("/api/dqxi", dq11Route);

app.listen(process.env.PORT, () =>
  console.log(`Server started on http://localhost:${process.env.PORT}`)
);
