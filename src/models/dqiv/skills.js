const fs = require("fs");
const path = require("path");

const game = __dirname.split("\\")[__dirname.split("\\").length - 1];
const pathToJSON = path.join(__dirname, `../../data/${game}/skills.json`);
const file = JSON.parse(fs.readFileSync(pathToJSON).toString());

const findAll = async (queryset) => {
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
