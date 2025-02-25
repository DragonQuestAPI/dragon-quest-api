const Loki = require('lokijs');
const fs = require('fs');
const path = require('path');

/**
 * Creates a new LokiJS database instance and loads data from JSON files.
 * @param {string} dataDir The directory containing the JSON files.
 * @param {string} dbName The name of the database file.
 * @param {object} options Configuration options for the LokiJS database.
 * @returns {object} The LokiJS database instance.
 */
const setupLokiDatabase = (dataDir, dbName, options) => {
  // Create a new LokiJS database instance
  const db = new Loki(dbName, {
    autoload: options.autoload || false,
    autosave: options.autosave || false,
    persistenceMethod: 'fs',
  });

  // Function to recursively traverse folders and create collections
  const loadData = () => {
    const traverseAndLoad = (currentPath, relativePath = '') => {
      fs.readdir(currentPath, (err, items) => {
        if (err) {
          console.error('Error reading directory:', err);
          return;
        }

        items.forEach(item => {
          const itemPath = path.join(currentPath, item);
          const itemRelativePath = path.join(relativePath, item);

          if (fs.statSync(itemPath).isDirectory()) {
            // If item is a directory, recurse into it
            traverseAndLoad(itemPath, itemRelativePath);
          } else if (path.extname(item) === '.json') {
            // If item is a JSON file, create a collection
            createCollectionFromJson(itemPath, itemRelativePath);
          }
        });
      });
    };

    // Function to create a LokiJS collection from a JSON file
    const createCollectionFromJson = (jsonFilePath, relativePath) => {
      const collectionName = path.basename(jsonFilePath, '.json'); // Use file name (without .json) as collection name
      const collection = db.getCollection(collectionName) || db.addCollection(collectionName, { indices: ['id'] });

      const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
      collection.insert(jsonData);

      console.log(`Loaded data from ${jsonFilePath} into collection ${collectionName}`);
    };

    // Start loading data from the base data directory
    traverseAndLoad(dataDir);
  };

  // Load the database
  db.loadDatabase({}, err => {
    if (err) {
      console.error('Error loading database:', err);
    } else {
      console.log('Database loaded');
      loadData(); // Load data after database is ready
    }
  });

  // Return the database instance
  return db;
};

// Example usage
const dataDir = path.join(__dirname, '..', 'data'); // Adjust this path as needed
const dbName = 'myDatabase.db';
const options = { autosave: false }; // Adjust options as needed

const db = setupLokiDatabase(dataDir, dbName, options);

// Export the database instance
module.exports = db;
