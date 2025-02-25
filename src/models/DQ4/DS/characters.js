// Import the LokiJS database instance
const db = require('../../loki-setup'); // Adjust the path to where `loki-setup.js` is located

/**
 * Finds all records in the 'characters' collection.
 * @returns {Promise<Array>} A promise that resolves to an array of character records.
 */
const find = async () => {
  try {
    // Access the 'characters' collection from the database
    const collection = db.getCollection('characters'); // Ensure 'characters' matches the JSON file name without extension

    if (!collection) {
      throw new Error('Collection "characters" not found in the database');
    }

    // Retrieve all records from the collection
    const result = collection.find();
    return result;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  find,
};
