const fs = require("fs");
const path = require("path");

const game = __dirname.split("\\")[__dirname.split("\\").length - 1];
const pathToJSON = path.join(__dirname, `../../data/${game}/skills.json`);
const file = JSON.parse(fs.readFileSync(pathToJSON).toString());

const findAll = async (queryset) => {
  try {
    console.log(Object.keys(queryset));
    console.log(Object.keys(file[0]));

    const filterByQueryset = (data, queryset) => {
      let tmp = {}
      Object.keys(queryset).forEach(q => {
        data.forEach(d => {
          if (d[q] == queryset[q]) tmp[d.slug] = 1;
        });
      });
      console.log(tmp);

      return data.filter((dat) => {
        Object.keys(queryset).forEach
        if (Object.keys(queryset).length < 1) return true;
      });
    };
    const result = filterByQueryset(file, queryset);
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
