const fs = require("fs");
const path = require("path");
const log = require("./log.js"); // Ensure log.js is correctly implemented

// Path to the gameFullNames.json file
const gameFullNamesPath = path.join(__dirname, "..", "scripts/readme-infos/gameFullNames.json");

// Add naturalSort method to Array prototype
Array.prototype.naturalSort = function () {
  const rx = /(\d+)|(\D+)/g;
  const rd = /\d+/;

  return this.sort((a, b) => {
    const aParts = String(a).toLowerCase().match(rx);
    const bParts = String(b).toLowerCase().match(rx);

    while (aParts.length && bParts.length) {
      const a1 = aParts.shift();
      const b1 = bParts.shift();

      if (rd.test(a1) || rd.test(b1)) {
        if (!rd.test(a1)) return 1;
        if (!rd.test(b1)) return -1;
        if (a1 !== b1) return a1 - b1;
      } else if (a1 !== b1) return a1 > b1 ? 1 : -1;
    }

    return aParts.length - bParts.length;
  });
};

// Function to read, sort, and update the gameFullNames.json file
const sortGameFullNames = () => {
  try {
    // Read the content of the gameFullNames.json file
    const rawData = fs.readFileSync(gameFullNamesPath, "utf-8");
    const data = JSON.parse(rawData);

    // Sort each series by game code
    const sortedData = Object.keys(data).reduce((acc, series) => {
      acc[series] = Object.keys(data[series])
        .naturalSort() // Apply naturalSort function to game codes
        .reduce((sortedSeries, key) => {
          sortedSeries[key] = data[series][key];
          return sortedSeries;
        }, {});
      return acc;
    }, {});

    // Write the sorted data back to the file
    fs.writeFileSync(gameFullNamesPath, JSON.stringify(sortedData, null, 2));
    log("The gameFullNames.json file has been updated successfully.", "\x1b[32m");

  } catch (error) {
    log(`Error processing gameFullNames.json: ${error.message}`, "\x1b[31m");
  }
};

// Run the function
sortGameFullNames();
