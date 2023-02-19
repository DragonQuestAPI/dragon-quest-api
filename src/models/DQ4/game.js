const fs = require("fs");
const path = require("path");

const pathToJSON = path.join(__dirname, `../../data/DQ4/game.json`);
const file = JSON.parse(fs.readFileSync(pathToJSON).toString());

const find = async () => {
  try {
    const result = file;
    return result;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  find,
};
