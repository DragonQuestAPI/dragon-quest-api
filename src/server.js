const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

const routeDQ1 = require("./routes/DQ1.js");
const routeDQ2 = require("./routes/DQ2.js");
const routeDQ3 = require("./routes/DQ3.js");
const routeDQ4 = require("./routes/DQ4.js");
const routeDQ5 = require("./routes/DQ5.js");
const routeDQ6 = require("./routes/DQ6.js");
const routeDQ7 = require("./routes/DQ7.js");
const routeDQ8 = require("./routes/DQ8.js");
const routeDQ9 = require("./routes/DQ9.js");
const routeDQ10 = require("./routes/DQ10.js");
const routeDQ11 = require("./routes/DQ11.js");
const routeDQ12 = require("./routes/DQ12.js");
const routeDQB1 = require("./routes/DQB1.js");
const routeDQB2 = require("./routes/DQB2.js");
const routeDQH1 = require("./routes/DQH1.js");
const routeDQH2 = require("./routes/DQH2.js");
const routeDQM1 = require("./routes/DQM1.js");
const routeDQM2 = require("./routes/DQM2.js");
const routeDQM3 = require("./routes/DQM3.js");
const routeDQMCH = require("./routes/DQMCH.js");
const routeDQMJ1 = require("./routes/DQMJ1.js");
const routeDQMJ2 = require("./routes/DQMJ2.js");
const routeDQMJ2P = require("./routes/DQMJ2P.js");
const routeDQMJ3 = require("./routes/DQMJ3.js");
const routeDQMJ3P = require("./routes/DQMJ3P.js");
const routeDQS = require("./routes/DQS.js");

app.use("/api/DQ1", routeDQ1);
app.use("/api/DQ2", routeDQ2);
app.use("/api/DQ3", routeDQ3);
app.use("/api/DQ4", routeDQ4);
app.use("/api/DQ5", routeDQ5);
app.use("/api/DQ6", routeDQ6);
app.use("/api/DQ7", routeDQ7);
app.use("/api/DQ8", routeDQ8);
app.use("/api/DQ9", routeDQ9);
app.use("/api/DQ10", routeDQ10);
app.use("/api/DQ11", routeDQ11);
app.use("/api/DQ12", routeDQ12);
app.use("/api/DQB1", routeDQB1);
app.use("/api/DQB2", routeDQB2);
app.use("/api/DQH1", routeDQH1);
app.use("/api/DQH2", routeDQH2);
app.use("/api/DQM1", routeDQM1);
app.use("/api/DQM2", routeDQM2);
app.use("/api/DQM3", routeDQM3);
app.use("/api/DQMCH", routeDQMCH);
app.use("/api/DQMJ1", routeDQMJ1);
app.use("/api/DQMJ2", routeDQMJ2);
app.use("/api/DQMJ2P", routeDQMJ2P);
app.use("/api/DQMJ3", routeDQMJ3);
app.use("/api/DQMJ3P", routeDQMJ3P);
app.use("/api/DQS", routeDQS);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);