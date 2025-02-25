const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../../../data/DQ7/3DS/weapons.json");
const data = JSON.parse(fs.readFileSync(dataPath).toString());

const formatQueryset = require("../../../utils/formatQueryset.js");
const filterByQueryset = require("../../../utils/filterByQueryset.js");

const find = async (queryset) => {
  try {
    const result = await filterByQueryset(
      data,
      await formatQueryset(queryset, Object.keys(data[0]))
    );
    return result;
  } catch (err) {
    throw err;
  }
};

const findByUuid = async (uuid) => {
  try {
    const result = data.filter((item) => item.uuid == uuid)[0];
    return result;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  find,
  findByUuid,
};