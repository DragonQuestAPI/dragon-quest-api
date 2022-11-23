const fs = require("fs");
const path = require("path");

const pathToJSON = path.join(__dirname, "../data/accessories.json");
const file = JSON.parse(fs.readFileSync(pathToJSON).toString());

const findAll = async () => {
  try {
    const result = file;
    return result;
  } catch (err) {
    throw err;
  }
};

const findById = async (id) => {
  try {
    const result = file.filter((data) => data.id == id)[0];
    return result;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findAll,
  findById,
};
