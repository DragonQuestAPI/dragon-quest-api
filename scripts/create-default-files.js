const fs = require("fs");
const path = require("path");
const requiredGames = require("../requiredGames.json");
const log = require("./log.js");

const routesBaseDir = path.join(__dirname, "..", "src", "routes");
const dataBaseDir = path.join(__dirname, "..", "src", "data");

const createFolders = (baseDir, structure) => {
  Object.entries(structure).forEach(([game, platforms]) => {
    const gameDirPath = path.join(baseDir, game);
    if (!fs.existsSync(gameDirPath)) {
      fs.mkdirSync(gameDirPath, { recursive: true });
      log(`Created ${gameDirPath}`, '\x1b[32m');
    } else {
      log(`Skipping ${gameDirPath}`, '\x1b[33m');
    }

    Object.keys(platforms).forEach(platform => {
      const platformDirPath = path.join(gameDirPath, platform);
      if (!fs.existsSync(platformDirPath)) {
        fs.mkdirSync(platformDirPath, { recursive: true });
        log(`Created ${platformDirPath}`, '\x1b[32m');
      } else {
        log(`Skipping ${platformDirPath}`, '\x1b[33m');
      }
    });
  });
};

const createRoutes = () => {
  const traverseAndCreateFiles = (currentPath) => {
    fs.readdir(currentPath, (err, items) => {
      if (err) {
        console.error('Error reading directory:', err);
        return;
      }

      items.forEach(item => {
        const itemPath = path.join(currentPath, item);
        if (fs.statSync(itemPath).isDirectory()) {
          traverseAndCreateFiles(itemPath);
        } else if (path.extname(item) === '.json') {
          const routeFileName = path.basename(item, '.json') + '.js';
          const routeFilePath = path.join(routesBaseDir, path.relative(dataBaseDir, itemPath).replace('.json', '.js'));
          const routeDirPath = path.dirname(routeFilePath);

          if (!fs.existsSync(routeDirPath)) {
            fs.mkdirSync(routeDirPath, { recursive: true });
          }

          if (!fs.existsSync(routeFilePath)) {
            const fileContent = `
const express = require("express");
const router = express.Router();

const model = require("../../models/${path.relative(dataBaseDir, itemPath).replace('.json', '.js').replace(/\\/g, '/')}");

router.get("/", async (req, res) => {
  try {
    const response = await model.find(req.body);
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
            `.trim();

            fs.writeFileSync(routeFilePath, fileContent);
            log(`Created ${routeFilePath}`, '\x1b[32m');
          } else {
            log(`Skipping ${routeFilePath}`, '\x1b[33m');
          }
        }
      });
    });
  };

  traverseAndCreateFiles(dataBaseDir);
};

const createPlatforms = (baseDir, structure) => {
  Object.entries(structure).forEach(([game, platforms]) => {
    const gameDirPath = path.join(baseDir, game);
    Object.entries(platforms).forEach(([platform, regions]) => {
      const platformFilePath = path.join(gameDirPath, `${platform}.js`);
      const platformDirPath = path.join(gameDirPath, platform);

      if (!fs.existsSync(platformFilePath)) {
        const files = fs.readdirSync(platformDirPath)
          .filter(file => path.extname(file) === '.js')
          .map(file => {
            const routeName = path.basename(file, '.js');
            const camelCaseName = routeName.replace(/(\w)(\w*)/, (_, firstLetter, rest) => firstLetter.toLowerCase() + rest);
            return {
              importStatement: `const ${camelCaseName}Route = require("./${platform}/${routeName}.js");`,
              useStatement: `router.use("/${camelCaseName}", ${camelCaseName}Route);`
            };
          });

        const fileContent = `
const express = require("express");
const router = express.Router();

${files.map(f => f.importStatement).join('\n')}

${files.map(f => f.useStatement).join('\n')}

module.exports = router;
        `.trim();

        fs.writeFileSync(platformFilePath, fileContent);
        log(`Created ${platformFilePath}`, '\x1b[32m');
      } else {
        log(`Skipping ${platformFilePath}`, '\x1b[33m');
      }
    });
  });
};

createFolders(routesBaseDir, requiredGames);
createRoutes();
createPlatforms(routesBaseDir, requiredGames);
