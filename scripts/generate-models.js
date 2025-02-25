const fs = require("fs");
const path = require("path");

// Paths to the source data and target models directories
const dataDir = path.join(__dirname, "..", "src", "data");
const modelsDir = path.join(__dirname, "..", "src", "models");

// Load the structure from requiredGames.json
const requiredGames = require("../requiredGames.json");

// Function to log messages with color codes
const log = (message, colorCode) => {
  const reset = '\x1b[0m';
  const color = colorCode || '';
  console.log(`${color}${message}${reset}`);
};

// Function to create folders and subfolders based on the structure
const createFoldersFromStructure = (baseDir, structure) => {
  Object.entries(structure).forEach(([mainFolder, subfolders]) => {
    const mainFolderPath = path.join(baseDir, mainFolder);
    try {
      if (!fs.existsSync(mainFolderPath)) {
        fs.mkdirSync(mainFolderPath, { recursive: true });
        log(`Created ${mainFolderPath}`, '\x1b[32m');
      } else {
        log(`Skipping ${mainFolderPath}`, '\x1b[33m');
      }
      subfolders.forEach(subfolder => {
        const subfolderPath = path.join(mainFolderPath, subfolder);
        if (!fs.existsSync(subfolderPath)) {
          fs.mkdirSync(subfolderPath, { recursive: true });
          log(`Created ${subfolderPath}`, '\x1b[32m');
        } else {
          log(`Skipping ${subfolderPath}`, '\x1b[33m');
        }
        
        // Create an empty game.json file if it doesn't exist
        const gameJsonPath = path.join(subfolderPath, "game.json");
        if (!fs.existsSync(gameJsonPath)) {
          fs.writeFileSync(gameJsonPath, JSON.stringify({}, null, 2));
          log(`Created ${gameJsonPath}`, '\x1b[32m');
        }
      });
    } catch (error) {
      console.error(`Error creating folders: ${error.message}`);
    }
  });
};

// Function to create model files for each JSON file in the data directory
const createModelFiles = () => {
  const traverseAndCreate = (currentPath, relativePath = '') => {
    // Read the contents of the current directory
    const filesAndDirs = fs.readdirSync(currentPath);

    filesAndDirs.forEach(item => {
      const itemPath = path.join(currentPath, item);
      const itemRelativePath = path.join(relativePath, item);

      if (fs.statSync(itemPath).isDirectory()) {
        // If item is a directory, recurse into it
        traverseAndCreate(itemPath, itemRelativePath);
      } else if (path.extname(item) === '.json') {
        // If item is a JSON file, create corresponding model file
        createModelFile(itemPath, itemRelativePath);
      }
    });
  };

  const createModelFile = (jsonFilePath, relativePath) => {
    const modelDir = path.join(modelsDir, path.dirname(relativePath));
    const modelFileName = path.basename(jsonFilePath, '.json') + '.js'; // Change extension to .js
    const modelFilePath = path.join(modelDir, modelFileName);

    // Ensure the directory for the model file exists
    if (!fs.existsSync(modelDir)) {
      fs.mkdirSync(modelDir, { recursive: true });
      log(`Created ${modelDir}`, '\x1b[32m');
    }

    // Check if the model file already exists
    if (fs.existsSync(modelFilePath)) {
      return; // Skip creating the file if it already exists
    }

    // Read the JSON data to determine its structure
    const data = JSON.parse(fs.readFileSync(jsonFilePath).toString());
    
    let fileContent;

    // Generate model file content based on whether data is an object or an array
    if (Array.isArray(data)) {
      fileContent = `
const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../../../data/${relativePath.replace(/\\/g, '/')}");
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
`.trim();
    } else if (typeof data === 'object') {
      fileContent = `
const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../../../data/${relativePath.replace(/\\/g, '/')}");
const data = JSON.parse(fs.readFileSync(dataPath).toString());

const find = async () => {
  try {
    const result = data;
    return result;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  find,
};
`.trim();
    } else {
      log(`Skipping ${modelFilePath} because JSON data is not an object or array`, '\x1b[33m');
      return;
    }

    // Write the model file
    fs.writeFileSync(modelFilePath, fileContent);
    log(`Created ${modelFilePath}`, '\x1b[32m');
  };

  // Start traversing from the data directory
  traverseAndCreate(dataDir);
};

// Create folders and subfolders, and model files
createFoldersFromStructure(path.join(__dirname, "..", "src", "data"), requiredGames);
createModelFiles();
