const fs = require("fs");
const path = require("path");
const requiredGames = require("../requiredGames.json");
const log = require("./log.js");

// Load game full names from JSON file
const gameFullNamesPath = path.join(__dirname, "readme-infos", "gameFullNames.json");
const gameFullNames = require(gameFullNamesPath);

// Path to the README.md file
const readmePath = path.join(__dirname, "..", "README.md");

// Function to generate the games list grouped by platform with regions
const generateGamesList = () => {
  // Helper function to get full name from gameFullNames
  const getFullName = (gameKey) => {
    for (const series in gameFullNames) {
      if (gameFullNames[series][gameKey]) {
        return gameFullNames[series][gameKey];
      }
    }
    throw new Error(`Full name for game "${gameKey}" is missing in ${gameFullNamesPath}`);
  };

  // Group games by platform
  const platformGroups = {};

  Object.entries(requiredGames).forEach(([gameKey, platforms]) => {
    const gameName = getFullName(gameKey);
    
    Object.entries(platforms).forEach(([platform, regions]) => {
      if (!platformGroups[platform]) {
        platformGroups[platform] = [];
      }
      regions.forEach(region => {
        platformGroups[platform].push(`  - ${gameName} (${region})`);
      });
    });
  });

  // Generate the formatted list with line breaks between platforms
  return Object.entries(platformGroups)
    .map(([platform, games]) => `- **${platform}**\n${games.join("\n")}`)
    .join("\n\n");
};

// Function to generate README content dynamically
const generateReadmeContent = () => {
  const gamesList = generateGamesList();

  return `
# ![Dragon Quest API](https://thumbs.gfycat.com/EarnestFreeAustraliansilkyterrier-size_restricted.gif) Dragon Quest API

⚠ **THIS PROJECT IS STILL UNDER DEVELOPMENT** ⚠

An API project featuring data from several episodes of the Dragon Quest franchise.
Supported languages: English, Spanish, French, German, Italian, and Japanese.

## Prerequisites

- An IDE such as [Visual Studio Code](https://code.visualstudio.com)
- [Git](https://git-scm.com)
- [Docker Desktop 3.9](https://www.docker.com/products/docker-desktop/) or greater
- [Postman](https://www.postman.com) or any tool to retrieve information from the API

## Installing

\`\`\`bash
git clone https://github.com/DragonQuestAPI/dragon-quest-api.git
\`\`\`

## Launching

### With Docker

\`\`\`bash
docker-compose up -d
\`\`\`

### With Node

\`\`\`bash
npm i
npm start
\`\`\`

## Games to be covered by the API

${gamesList}

- Probably more to come in the future...

## ![Credits & Thanks](https://thumbs.gfycat.com/UnnaturalAnxiousElkhound-size_restricted.gif) Credits & Thanks

- [EnriqueFeola](https://github.com/EnriqueFeola) ![EnriqueFeola](https://avatars.githubusercontent.com/u/110606657) - Contributor
- [SoruTheWhistler](https://github.com/NaorimSenchai) ![SoruTheWhistler](https://avatars.githubusercontent.com/u/56729935) - Founder, Contributor

Of course, this project wouldn't exist without [Square Enix](https://www.square-enix.com), who made these wonderful games.

If you have never tried the Dragon Quest franchise, please support Square Enix by giving it a try. ❤

## Dragon Quest API development files

These include:

- Game save files to fetch and verify information easily
- Textual files containing helpful information
- Screenshots to prove the veracity of specific information

The Dragon Quest API's development files were moved to the Dragon Quest API Team's cloud storage.

They can now only be accessed by the development team or on demand. If you wish to help with the project, contact us for more information.
  `.trim();
};

// Function to create or update the README.md file
const createReadmeFile = () => {
  try {
    const content = generateReadmeContent();
    fs.writeFileSync(readmePath, content);
    log(`Created or updated ${readmePath}`, '\x1b[32m');
  } catch (error) {
    console.error(`Error creating or updating README.md: ${error.message}`);
  }
};

createReadmeFile();
