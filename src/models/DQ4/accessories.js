const fs = require("fs");
const path = require("path");

const pathToJSON = path.join(__dirname, `../../data/DQ4/accessories.json`);
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
