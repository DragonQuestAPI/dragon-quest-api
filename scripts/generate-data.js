const fs = require("fs");
const path = require("path");
const requiredGames = require("../requiredGames.json");
const log = require("./log.js");

// Base directory for subfolders creation
const baseDir = path.join(__dirname, "..", "src", "data");

// Function to create subfolders based on the structure in the specified base directory
const createSubfolders = (baseDir, structure) => {
  Object.entries(structure).forEach(([mainFolder, subfolders]) => {
    const mainFolderPath = path.join(baseDir, mainFolder);

    try {
      // Create the main folder if it doesn't exist
      if (!fs.existsSync(mainFolderPath)) {
        fs.mkdirSync(mainFolderPath, { recursive: true });
        log(`Created ${mainFolderPath}`, '\x1b[32m');
      } else {
        log(`Skipping ${mainFolderPath}`, '\x1b[33m');
      }

      subfolders.forEach(subfolder => {
        const subfolderPath = path.join(mainFolderPath, subfolder);
        
        // Create the subfolder if it doesn't exist
        if (!fs.existsSync(subfolderPath)) {
          fs.mkdirSync(subfolderPath, { recursive: true });
          log(`Created ${subfolderPath}`, '\x1b[32m');
        } else {
          log(`Skipping ${subfolderPath}`, '\x1b[33m');
        }
      });
    } catch (error) {
      console.error(`Error creating folders: ${error.message}`);
    }
  });
};

// Function to create default game.json files in each subfolder
const createGameJsonFiles = (baseDir, structure) => {
  Object.entries(structure).forEach(([mainFolder, subfolders]) => {
    subfolders.forEach(subfolder => {
      const subfolderPath = path.join(baseDir, mainFolder, subfolder);
      const gameJsonPath = path.join(subfolderPath, "game.json");

      try {
        // Create the default game.json file if it doesn't exist
        if (!fs.existsSync(gameJsonPath)) {
          fs.writeFileSync(gameJsonPath, JSON.stringify({}, null, 2)); // Create file with an empty object
          log(`Created ${gameJsonPath}`, '\x1b[32m');
        } else {
          log(`Skipping ${gameJsonPath}`, '\x1b[33m');
        }
      } catch (error) {
        console.error(`Error creating game.json file: ${error.message}`);
      }
    });
  });
};

// Execute the creation of subfolders and game.json files
createSubfolders(baseDir, requiredGames);
createGameJsonFiles(baseDir, requiredGames);
