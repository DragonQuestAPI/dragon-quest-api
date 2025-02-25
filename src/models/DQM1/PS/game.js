const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../../../data/DQM1/PS/game.json");
const data = JSON.parse(fs.readFileSync(dataPath).toString());

const find = async () => {
  try {
    const result = data;
    return result;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  find,
};