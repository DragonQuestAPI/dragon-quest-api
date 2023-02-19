const fs = require("fs");
const path = require("path");

const game = __dirname.split("\\")[__dirname.split("\\").length - 1];
const pathToJSON = path.join(__dirname, `../../data/DQ5/weapons.json`);
const file = JSON.parse(fs.readFileSync(pathToJSON).toString());

const formatQueryset = require("../../utils/formatQueryset.js");
const filterByQueryset = require("../../utils/filterByQueryset.js");

const findAll = async (queryset) => {
  try {
    const result = await filterByQueryset(
      file,
      await formatQueryset(queryset, Object.keys(file[0]))
    );
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
