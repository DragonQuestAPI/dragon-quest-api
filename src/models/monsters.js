const fs = require("fs");
const path = require("path");

const pathToJSON = path.join(__dirname, "../data/monsters.json");
const file = JSON.parse(fs.readFileSync(pathToJSON).toString());

const findAll = async () => {
  try {
    const result = await file;
    return result;
  } catch (err) {
    throw err;
  }
};

const findById = async (id) => {
  try {
    const result = await file.filter((data) => data.id == id)[0];
    return result;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findAll,
  findById,
};
