const fs = require("fs");
const path = require("path");

const game = __dirname.split("\\")[__dirname.split("\\").length - 1];
const pathToJSON = path.join(__dirname, `../../data/${game}/monsters.json`);
const file = JSON.parse(fs.readFileSync(pathToJSON).toString());

const findAll = async () => {
  try {
    const result = await file;
    return result;
  } catch (err) {
    throw err;
  }
};

const findByChapterNumber = async (id) => {
  try {
    const result = await file
      .filter((data) => data.found_at[`chapter${id}`].length > 0)
      .sort((a, b) => a - b);
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
  findByChapterNumber,
  findById,
};
