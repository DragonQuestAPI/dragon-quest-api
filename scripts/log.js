/**
 * Logs a message to the console with optional color formatting.
 *
 * @param {string} message - The message to be logged.
 * @param {string} [colorCode] - The ANSI color code to use for the message.
 * @return {void}
 */
const log = (message, colorCode) => {
  const reset = '\x1b[0m';
  const color = colorCode || '';
  console.log(`${color}${message}${reset}`);
};

module.exports = log;