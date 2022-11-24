const fs = require("fs");
const path = require("path");

const game = __dirname.split("\\")[__dirname.split("\\").length - 1];
const pathToJSON = path.join(__dirname, `../../data/${game}/game.json`);
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
