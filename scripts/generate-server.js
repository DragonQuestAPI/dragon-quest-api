const fs = require("fs");
const path = require("path");
const requiredGames = require("../requiredGames.json");
const log = require("./log.js");

// Path to the output server.js file
const serverPath = path.join(__dirname, "..", "src", "server.js");

// Function to generate server.js content dynamically
const generateServerContent = (structure) => {
  // Create dynamic imports for each game
  const imports = Object.keys(structure).map(mainFolder => {
    return `const route${mainFolder} = require("./routes/${mainFolder}.js");`;
  }).join('\n');

  // Create dynamic routes for each game
  const routes = Object.keys(structure).map(mainFolder => {
    return `app.use("/api/${mainFolder}", route${mainFolder});`;
  }).join('\n');

  // Template for server.js
  const fileContent = `
const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

${imports}

${routes}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(\`Server started on http://localhost:\${PORT}\`)
);

`.trim();

  return fileContent;
};

// Create or replace the server.js file
const createServerFile = () => {
  try {
    const content = generateServerContent(requiredGames);
    fs.writeFileSync(serverPath, content);
    log(`Created or updated ${serverPath}`, '\x1b[32m');
  } catch (error) {
    console.error(`Error creating or updating server.js: ${error.message}`);
  }
};

createServerFile();
