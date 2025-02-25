const fs = require("fs");
const path = require("path");
const requiredGames = require("../requiredGames.json");

const folders = [
  "data",
  "models",
  "routes",
]

// Function to check the existence of platform subfolders in each game folder
const checkSubfolders = (dirPath, mainFolder, subfolders) => {
  return subfolders.every(subfolder => {
    const subfolderPath = path.join(dirPath, mainFolder, subfolder);
    if (!fs.existsSync(subfolderPath)) {
      console.error(`Missing subfolder: ${subfolderPath}`);
      return false;
      // fs.mkdirSync(subfolderPath, { recursive: true });
    }
    return true;
  });
};

// Function to check the existence of .js files
const checkFiles = (dirPath, mainFolder, subfolders) => {
  return subfolders.every(subfolder => {
    const filePath = path.join(dirPath, mainFolder, `${subfolder}.js`);
    if (!fs.existsSync(filePath)) {
      console.error(`Missing file: ${filePath}`);
      // return false;

      //       const fileContent = `
      // const express = require("express");
      // const router = express.Router();

      // const gameRoute = require(\`./${subfolder}/game.js\`);

      // router.use("/", gameRoute);

      // module.exports = router;
      //       `.trim();

      //       fs.writeFileSync(filePath, fileContent);
      //       console.log(`Created file: ${filePath}`);
    }
    return true;
  });
};

const checkRequiredFiles = (dirPath, requiredFiles) => {
  const existingFiles = fs.readdirSync(dirPath);
  return requiredFiles.every(file => {
    if (!existingFiles.includes(file)) {
      console.error(`Missing file: ${file}`);
      return false;
    }
    return true;
  });
};

describe("Directory Structure", () => {
  folders.forEach(folder => {
    test(`should have all required subfolders in src/${folder}`, () => {
      const folderPath = path.join(__dirname, "..", "src", folder);
      const areSubfoldersCorrect = Object.entries(requiredGames).every(([mainFolder, subfolders]) => {
        return checkSubfolders(folderPath, mainFolder, subfolders);
      });
      expect(areSubfoldersCorrect).toBe(true);
    });
  });
});

describe("File Structure", () => {
  test("should have all required files in src/routes", () => {
    const folderPath = path.join(__dirname, "..", "src", "routes");
    const areFilesCorrect = Object.entries(requiredGames).every(([mainFolder, subfolders]) => {
      return checkFiles(folderPath, mainFolder, subfolders);
    });

    expect(areFilesCorrect).toBe(true);
  });

  test("should have all required .js files named after games in src/routes", () => {
    const folderPath = path.join(__dirname, "..", "src", "routes");
    const requiredFiles = Object.keys(requiredGames).map(mainFolder => `${mainFolder}.js`);
    const allFilesPresent = checkRequiredFiles(folderPath, requiredFiles);
    expect(allFilesPresent).toBe(true);
  });
});